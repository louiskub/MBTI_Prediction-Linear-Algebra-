# import base64
# from io import BytesIO
# import numpy as np
# import matplotlib.pyplot as plt

# x = np.arange(0, 2*np.pi, 0.1)
# y = np.sin(x)

# fig, ax = plt.subplots()
# ax.plot(x, y)
# ax.set_xlabel('x')
# ax.set_ylabel('y')
# ax.set_title('Sinusoid')


# tmpfile = BytesIO()
# fig.savefig(tmpfile, format='png')
# encoded = base64.b64encode(tmpfile.getvalue()).decode('utf-8')

# html = '<html>' + '<img src=\'data:image/png;base64,{}\'>'.format(encoded) + '</html>'

# with open('fig2.html','w') as f:
#     f.write(html)

import matplotlib.pyplot as plt
plt.plot([1, 2, 3], [1, 4, 9])
# plt.show()
plt.savefig('web_app/backend/img/foo.png')
