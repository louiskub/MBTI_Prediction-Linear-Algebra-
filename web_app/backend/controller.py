import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics.pairwise import cosine_similarity
from scipy.stats import pearsonr

class Controller:
    def __init__(self):
        self.df = pd.read_csv("https://raw.githubusercontent.com/louiskub/linear/refs/heads/main/data.csv")
        #Encoder Part
        self.label_encoders = {}
        for column in ['Gender', 'Interest']:
            self.label_encoders[column] = LabelEncoder()
            self.df[column] = self.label_encoders[column].fit_transform(self.df[column])
        
        self.column_means = self.df.groupby('Personality').mean()
    
    def find_cosine(self, input_vector):
        input_vector = self.input_encode(input_vector)
        if not isinstance(input_vector, list):
            return str(input_vector)
        ans = []
        for i in self.column_means.index:
            cosine_sim = cosine_similarity([input_vector], [self.column_means.loc[i].values])
            ans.append([cosine_sim[0][0], i])
        ans.sort(reverse=True)
        return ans

    def find_pearson(self, input_vector):
        input_vector = self.input_encode(input_vector)
        if not isinstance(input_vector, list):
            return str(input_vector)
        ans = []
        print("ok")
        for i in self.column_means.index:
            pearson_corr, _ = pearsonr(input_vector, self.column_means.loc[i].values)
            ans.append([pearson_corr, i])
        ans.sort(reverse=True)
        return ans
    
    def input_encode(self, input_vector):
        try:
            # print(input_vector)
            # print(type(input_vector))
            # print(input_vector.gender,"\n\n")
            input_vector.gender = self.label_encoders["Gender"].transform([input_vector.gender])[0]
            # input_vector["education"] = self.label_encoders["education"].transform([input_vector["education"]])[0]
            input_vector.interest = self.label_encoders["Interest"].transform([input_vector.interest])[0]
            return [input_vector.age, input_vector.gender, input_vector.education, input_vector.intro, input_vector.sensing, 
                    input_vector.thinking, input_vector.judging, input_vector.interest]
        except Exception as e:
            return e 

    def corr_for_mbti(self):
        new_df = self.df
        for person in new_df["Personality"].unique():
            person_df = new_df[new_df["Personality"] == person]
            corr_matrix = person_df.drop("Personality",axis=1).corr()
            plt.figure(figsize=(15, 5))
            sns.heatmap(corr_matrix, annot=True, cmap='coolwarm')
            plt.title(f'{person} Correlation Matrix')
            plt.savefig(f'web_app/backend/img/corr_mbti_{person}.png')
            # plt.show()
    
    def corr_for_interest(self):
        df = self.df
        label_encoders = self.label_encoders
        interest = label_encoders['Interest'].classes_
        for person in df["Interest"].unique():
            person_df = df[df["Interest"] == person].drop("Interest",axis=1)
            corr_matrix = person_df.drop("Personality",axis=1).corr()
            plt.figure(figsize=(15, 5))
            sns.heatmap(corr_matrix, annot=True, cmap='coolwarm')
            plt.title(f'{interest[person]} Correlation Matrix')
            plt.savefig(f'web_app/backend/img/corr_interest_{interest[person]}.png')
            # plt.show()
    
    def corr_for_gender(self):
        df = self.df
        label_encoders = self.label_encoders
        gend = label_encoders['Gender'].classes_
        for person in df["Gender"].unique():
            person_df = df[df["Gender"] == person].drop("Gender",axis=1)
            corr_matrix = person_df.drop("Personality",axis=1).corr()
            plt.figure(figsize=(15, 5))
            sns.heatmap(corr_matrix, annot=True, cmap='coolwarm')
            plt.title(f'{gend[person]} Correlation Matrix')
            plt.savefig(f'web_app/backend/img/corr_gender_{gend[person]}.png')
            # plt.show()

if __name__ == "__main__":
    controller = Controller()
    input_vector = [float(e) for e in "27.0 0	0	5.24958	5.963290	1.16176	5.873350	2	".split()]
    # print(controller.find_pearson(input_vector))
    controller.corr_for_mbti()
    controller.corr_for_interest()
    controller.corr_for_gender()


