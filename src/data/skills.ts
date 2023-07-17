import react from "../assets/React.svg";
import mongo from "../assets/mongodb.svg";
import express from "../assets/express.svg";
import node from "../assets/NodeJS.svg";
import cypress from "../assets/cypress.svg";
import graphql from "../assets/graphql.svg";
import git from "../assets/git.svg";
import python from "../assets/python.svg";
import java from "../assets/java.svg";
import azuredevops from "../assets/azure_devops.png";
import mysql from "../assets/mysql.svg";
import html from "../assets/html-5.svg";
import css from "../assets/css-3.svg";
import javascript from "../assets/javascript.svg";
import typescript from "../assets/typescript.svg";
import pandas from "../assets/pandas.svg.png";
import tableau from "../assets/tableau.png";
import docker from "../assets/docker.svg";
import airflow from "../assets/airflow.png";
import spark from "../assets/Apache_Spark_logo.svg.png";
import scala from "../assets/scala.svg.png"


export const skills = {
	skillSet: [
		{
			name: "React",
			icon: react,
			height: "5rem",
		},
		{
			name: "NodeJS",
			icon: node,
			height: "4rem",
		},
		{
			name: "MongoDB",
			icon: mongo,
			height: "2rem",
		},
		{
			name: "Express",
			icon: express,
			height: "2rem",
		},
		{
			name: "Typescript",
			icon: typescript,
			height: "4rem",
		},
		{
			name: "HTML",
			icon: html,
			height: "5rem",
		},
		{
			name: "CSS",
			icon: css,
			height: "5rem",
		},
		{
			name: "JavaScript",
			icon: javascript,
			height: "4rem",
		},
		{
			name: "Git",
			icon: git,
			height: "5rem",
		},
		{
			name: "Python",
			icon: python,
			height: "4rem",
		},
		{
			name: "Java",
			icon: java,
			height: "5rem",
		},
		{
			name: "MySQL",
			icon: mysql,
			height: "3rem",
		},
		{
			name: "Docker",
			icon: docker,
			height: "4rem",
		},
		{
			name: "Scala",
			icon: scala,
			height: "5rem",
		},
		{
			name: "Spark",
			icon: spark,
			height: "5rem",
		},
		{
			name: "Airflow",
			icon: airflow,
			height: "5rem",
		},
		{
			name: "Tableau",
			icon: tableau,
			height: "5rem",
		},
		{
			name: "Pandas",
			icon: pandas,
			height: "5rem",
		},
		{
			name: "Azure Devops",
			icon: azuredevops,
			height: "5rem",
		},
	],
	categories: [
		{
			title: "Data Engineering",
			items: [
				"Apache Spark",
				"Airflow",
				"PySpark",
				"Hadoop",
				"Tableau"
			],
		},
		{
			title: "Web Development",
			items: [
				"React",
				"TypeScript",
				"Node.js",
				"Express",
				"HTML / CSS / JS",
			],
		},
		{
			title: "Programming Languages",
			items: ["Python", "Scala", "Java", 'JavaScript'],
		},
		{
			title: "Data Management",
			items: ["MongoDB", "MySQL", "PostgreSQL"],
		},
		{
			title: "Modules",
			items: [
				"Pandas",
				"Numpy",
				"Scikit-Learn",
				"Beautiful Soup",
				"Pytorch",
				"Matplotlib"
			]
		},
		// {
		// 	title: "CSS Frameworks",
		// 	items: ["Tailwind CSS", "Bootstrap"],
		// },
		// {
		// 	title: "Backend Frameworks",
		// 	items: ["Django", "Flask"],
		// },
		{
			title: "Tools",
			items: ["Docker", "Git", "GitHub", "Jira", "Azure Devops"],
		},
		{
			title: "Testing",
			items: ["Pytest", "Unittest"],
		},
	],
};
