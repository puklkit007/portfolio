import kreedon from "../assets/kreedon.jpeg";
import blk from "../assets/blk.png";
import paysfer from "../assets/paysfer.jpeg";

export const work_experience = {
	professional: [
		{
			company: "Paysfer eMart",
			title: "Software Developer Intern",
			dates: "May 2023 to Aug 2023",
			from_date: "May 2023",
			to_date: "Aug 2023",
			dates_short: "May '23 to Aug '23",
			location: "New York City, USA",
			duration: "3 months",
			description: [
				"Implemented a high-capacity Bulk Upload API allowing sellers to add over 5000 products simultaneously to the platform.",
				"Implemented UI, business logic, API using React and NodeJS for e-commerce web application.",
				"Spearheaded the integration of shipping services by serving as the primary liaison with UPS, incorporating REST APIs into our shipping procedures for enhanced efficiency."
			],
			skills: [
				"React",
				"NodeJS",
				"Typescript",
				"HTML/CSS/JS",
				"MongoDB"
			],
			image: paysfer,
		},
		{
			company: "BlackRock",
			title: "Software Developer",
			dates: "July 2019 to July 2022",
			from_date: "July 2019",
			to_date: "July 2022",
			dates_short: "Jul '19 to Jul '22",
			location: "Gurgaon, India",
			duration: "3 years",
			description: [
				"Developed a framework to unify scattered data sources (35+ sources) into one main dataset using SQL and Python.",
				"Designed a data orchestration framework on Apache Airflow to process more than 300 GB of trading data daily.",
				"Partnered with stakeholders to create Python models using Pandas & NumPy based on business needs for stress testing and balance sheet management. These models facilitated data-driven insights and portfolios for over 100 EMEA clients.",
				"Leveraged Tableau and Snowflake to analyze ESG data trends for various corporations, driving insightful forecasts.",
				"Worked on a Random Forest model using scikit-learn to forecast the carbon footprints of companies, helping investors improve their investment decision making by 20%.",
				"Designed and built a framework for Test Case Automation in Python utilizing Selenium, Numpy, Pandas and Pytest."
			],
			skills: [
				"Python",
				"Pandas",
				"Numpy",
				"SQL",
				"Airflow",
				"PySpark",
				"Azure Devops",
				"Scikit-learn"
			],
			image: blk,
		},
		{
			company: "BlackRock",
			title: "Big Data Intern",
			dates: "January 2019 to June 2019",
			from_date: "January 2019",
			to_date: "June 2019",
			dates_short: "Jan '19 to Jun '19",
			location: "Gurgaon, India",
			duration: "6 months",
			description: [
				"Built ETL (Extract Transform and Load) pipelines in Spark Scala and Airflow to process more than 100TB of data from multiple sources for automating data ingestion into in-house analytics platform boosting product adoption rate by 34%.",
				"Optimized and implemented the batch processing in SQL to migrate large volumes of data from HDFS to Data Lake. Improved the performance by 50% through the use of indexing, stored procedures, and bulk inserts.",
				"Evaluated the optimal processing capacity required to execute a model by configuring the nodes, executors, memory, etc. on a Hadoop environment reducing the run time by 45%"
			],
			skills: ["Scala", "Spark", "SQL", "HDFS"],
			image: blk,
		},
		{
			company: "KreedOn",
			title: "Software Developer Intern",
			dates: "May 2018 to July 2018",
			from_date: "May 2018",
			to_date: "July 2018",
			dates_short: "May '18 to July '18",
			location: "Pune, India",
			duration: "3 months",
			description: [
				"Developed an end-to-end Sports Marketing web app using NodeJS, ExpressJS, and Facebook Graph API's for Instagram, complemented by a Python and Selenium-based web-scraping bot to gather sports athletes' metrics from Instagram. Utilized machine learning techniques to predict their earning potential through brand collaborations.",
			],
			skills: ["Python", "NodeJS", "HTML/CSS/JS", "Beautiful Soup"],
			image: kreedon,
		},
	],
};
