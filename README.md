# FuelSense

## Idea No 1
 
#### Project Title
FuelSense
# Approved

#### Abstract
Modern automotive companies spend large sums of money trying to meet government-regulated standards for fuel-efficiency. Finding optimal conditions for an existing design to be tested under is far cheaper than redesigning an engine for higher efficiency. By creating predictive software capable of estimating the conditions of optimal function, car corporations could save substantial amounts of money on redesigns.
 
Because accurate predictions need to be made with a relatively small dataset, neural nets are unlikely to be effective for this task. Instead, due to the consistency and cleanliness of our data, we believe Support Vector Machines will be highly effective at building a predictive model.
 
Additionally, because Support Vector Machine predictions are relatively fast compared to neural nets, a brute force approach can be used for approximating optimal values for missing variables.

#### Project idea description 
The Corporate Average Fuel Economy (CAFE) standards set by the Secretary of Transportation and EPA regulation require all new vehicles to meet a certain fuel efficiency standard. The current automotive industry heavily relies on statistics such as fuel economy to effectively market their product and to determine product feasibility for their future products.
 
Our project aims to create an application that will enable the manufacturers to analyze mileage for different types of fuels and road conditions. The application will be able to set various parameters and predict the mileage for a fuel type in different conditions. This will help the enterprise in marketing their products and obtaining approval from the EPA.

#### Data Source  
https://www.kaggle.com/anderas/car-consume#measurements.csv
 
 
#### Goal of the project
Use Support Vector Machines to evaluate the best fuel economy for different fuel types considering a variety of environmental factors and road conditions.

#### Technology stack
- React
- Nodejs
- Express
- MongoDB
- Python - scikit-learn, NumPy, Pandas, PyPI
- Docker
- Amazon AWS – ECS, ECR, EC2
 
 
## Idea No 2
 
#### Project Title
Contagious Diseases Predictor

#### Abstract 
Groups like the WHO and the CDC constantly monitor disease outbreaks in order to prevent the spread of sickness. Unfortunately, their work is mostly reactive. They can’t be on-site administering care until after they know where their assistance will be the most effective. By using predictive software capable of providing early warnings, medical teams could be dispatched before mass outbreaks reached an area.

Simulation modeling with machine learning is a well-researched field and is commonly used in weather prediction. We believe that by mirroring these techniques it may be possible to more effectively control the spread of diseases.
 
#### Project idea description 
A web application that will predict various diseases like smallpox, polio, measles, mumps, rubella, hepatitis A, and whooping cough at the state level for the US. The application will use a 45+ year weekly trending data to analyze and predict the number of cases that might be triggered for a particular week in a particular state. Architectures like LSTMs and other RNN variants will be used to make effective and accurate predictions on the data. It will use a graphing library to display the trends of future epidemics in an interactive way.Epidemic patterns can be compared to stock medicine supplies and manage medical services.
  
#### Data Source 
https://www.kaggle.com/pitt/contagious-diseases/data
 
#### Goal of the project
To build a predictive model of outbreaks to prevent the spread of various diseases for the health department of the US.
 
#### Technology stack 
- Regression/Machine Learning
- Nodejs
- Express
- MongoDB
- Amazon AWS – EC2

## Idea No 3
 
#### Project Title
SecuriBot

#### Abstract
A recent study titled “The Effect of Police Response Time on Crime Clearance Rates” provided empirical data that indicated that quicker response by Police resulted in an ~20% increased clearance rate. While multiple applications have surfaced that provide one or other forms of security such as sending an SOS or text message to first responders, most of the applications underutilize the high-speed network connectivity offered for mobile devices. The proposed application aims to provide mobile users not just easy access to emergency services, but also enhance the process of crisis handling and conviction of the accused. With the help of live video, audio and GPS tracking information, the first responders have more insight into what is to expect to go into a situation.

To make the application platform-independent, React Native will be used to develop the front end mobile application. The backend system will be developed in Node+Express and the data captured by the user will be stored in an Amazon S3 bucket. The user information, with embedded incident reports and location of the incident, will be stored in a Relational Database System.
 
#### Project idea description
This will be a React Native security app for mobile. It will provide assistance to users in threatening situations. For example, if a user is attacked by a thief or witnesses a robbery, they can start the SecuriBot Mobile App. Security Bot will automatically start streaming the user's location, audio, and video to the Security Servers. Once a user starts the app, local emergency services will be automatically contacted and sent the data, making it easy for them to locate and assist the victim.

#### Goal of the project
Improve user safety and emergency service response time through a mobile application.
 
#### Technology stack    
- React Native
- Nodejs
- Express
- MySQL
- AWS – EC2
- AWS – S3
