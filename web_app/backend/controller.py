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
        for column in ['Gender', 'Interest', 'Education']:
            self.label_encoders[column] = LabelEncoder()
            self.df[column] = self.label_encoders[column].fit_transform(self.df[column])
        
        self.column_means = self.df.groupby('Personality').mean()
    
    def find_pearson(self, input_vector):
        ans = []
        for i in self.column_means.index:
            pearson_corr, _ = pearsonr(input_vector, self.column_means.loc[i].values)
            ans.append([pearson_corr, i])
        ans.sort(reverse=True)
        return ans



