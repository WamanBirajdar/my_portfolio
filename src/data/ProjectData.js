// --------------------------------------- Project List
export const ProjectList = [
  {
    img: "/renr-resposive.png",
    title: "Real-Time Data pipeline Using Confluent Kafka",
    description:
      "Real Time data Pipeline using messaging system.Here i use confluent cloud based system.Publish on records on kafka topic and polling message from kafka topic",
    tech_stack: ["PySpark", "Confluent Kafka","Python"],
    github_url: "",
    demo_url: "https://www.linkedin.com/posts/waman-b-birajdar_dataengineering-pubsub-messaging-activity-7052683192742412288-MwnE?utm_source=share&utm_medium=member_desktop",
  },
  {
    img: "/renr-resposive.png",
    title: "EMPLOYEE ATTRITION PREDICTION",
    description:
      "Predict where employee leave your organization or not.For better use we create User Interface where you have to give some paramters on that paramters ML model give prediction",
    tech_stack: ["Python","ML","Streamlit","NumPy","Git"],
    github_url: "",
    demo_url: "https://www.linkedin.com/posts/waman-b-birajdar_dataengineering-pubsub-messaging-activity-7052683192742412288-MwnE?utm_source=share&utm_medium=member_desktop",
  },
  {
    img: "/renr-resposive.png",
    title: "ETL DATA PIPELINE",
    description:
      "Created data Pipeline Using Big Data technologies MySql, Confluent KAFKA, AWS S3, Redshift.We Have Raw dataset in Mysql then perform some transformation and at the end we get clean dataset in Redshift",
    tech_stack: ["Python","PySpark","AWS S3","AWS Redshift","Kafka","MySQL"],
    github_url: "",
    demo_url: "https://www.linkedin.com/posts/waman-b-birajdar_dataengineering-pubsub-messaging-activity-7052683192742412288-MwnE?utm_source=share&utm_medium=member_desktop",
  },
  {
    img: "/renr-resposive.png",
    title: "EVENT DRIVEN DATA PIPELINE",
    description:
      "Created event data pipeline on AWS cloud (ETL data pipeline) When file arrive in AWS S3 as soon as read it and dump it into AWS RDS",
    tech_stack: ["Python","PySpark","AWS S3","AWS RDS"],
    github_url: "",
    demo_url: "https://www.linkedin.com/posts/waman-b-birajdar_dataengineering-pubsub-messaging-activity-7052683192742412288-MwnE?utm_source=share&utm_medium=member_desktop",
  },
  {
    img: "/renr-resposive.png",
    title: "AWS DATA PIPELINE",
    description:
      "Implemented Data pipeline Genrated mock data using one Lambda it's triggered by Event Bridge.Read by second lambda then second lambda write data to AWS S3 in JSON Format. Using Glue job put data into Dyanmo DB",
    tech_stack: ["Python","PySpark","AWS S3","AWS EventBridge","AWS Lambda","Dynamo DB","GLue"],
    github_url: "",
    demo_url: "https://www.linkedin.com/posts/waman-b-birajdar_dataengineering-pubsub-messaging-activity-7052683192742412288-MwnE?utm_source=share&utm_medium=member_desktop",
  },
  {
    img: "/renr-resposive.png",
    title: "ETL API-SPARK-HDFS",
    description:
      "Created one Data Pipeline fetching data using API and dump into HDFS for further processing PySpark used for data holding and do some Processing",
    tech_stack: ["Python","PySpark","HDFS","API"],
    github_url: "",
    demo_url: "https://www.linkedin.com/posts/waman-b-birajdar_dataengineering-pubsub-messaging-activity-7052683192742412288-MwnE?utm_source=share&utm_medium=member_desktop",
  },
  {
    img: "/renr-resposive.png",
    title: "Read Data from S3 Upload to RDS",
    description:
      "Real Time data Pipeline using messaging system.Here i use confluent cloud based system.Publish on records on kafka topic and polling message from kafka topic",
    tech_stack: ["RDS",
    "S3",
    "MySQL",
    "EC2",
    "Pandas",
    "Jupyter",
    "boto3",
    "sqlalchemy"],
    github_url: "",
    demo_url: "https://www.linkedin.com/posts/waman-b-birajdar_dataengineering-pubsub-messaging-activity-7052683192742412288-MwnE?utm_source=share&utm_medium=member_desktop",
  },
  {
    img: "/renr-resposive.png",
    title: "Amazon Glue ETL Job with Spark",
    description:
      "In this project, we will first create a new S3 bucket and upload a remote CSV file into that S3 bucket. We are going to create a Data Catalog using either Crawler or a custom schema. Once all is created, we are going to create a new Glue ETL Job. We are going to go through both options: Spark script and Jupyter Notebook. We will do some transformations using Spark. Once our data frame is clear and ready, we will upload it as a parquet file to S3 and will create a corresponding Data Catalog as well. We are going to query the data using Athena and S3 Select. We will also schedule the job so that it runs on a regular basis.",
    tech_stack: ["Glue",
    "Spark",
    "S3",
    "EC2",
    "Parquet",
    "Athena"],
    github_url: "",
    demo_url: "https://www.linkedin.com/posts/waman-b-birajdar_dataengineering-pubsub-messaging-activity-7052683192742412288-MwnE?utm_source=share&utm_medium=member_desktop",
  },
  {
    img: "/mymind-responsive.png",
    title: "Spark Kafka Structured Streaming",
    description:
      "We will use Random Name API to get the data. It generates new random data every time we trigger the API. We will get the data using our first Python script. We will run this script regularly to illustrate the streaming data. This script will also write the API data to the Kafka topic. We will also schedule and orchestrate this process using the Airflow DAG script. Once the data is written to the Kafka producer, we can get the data via Spark Structured Streaming script. Then, we will write the modified data to Cassandra using the same script. All the services will be running as Docker containers.",
    tech_stack: ["Spark",
    "Kafka",
    "Airflow",
    "Cassandra",
    "API",
    "Docker",
    "Zookeeper"],
    github_url: "https://github.com/salesp07/MyMind---Copy",
    demo_url: "https://mymindweb.vercel.app/",
  },
  {
    img: "/pokedex-responsive.png",
    title: "Trigger Amazon Lambda with S3 and Upload Data to RDS",
    description:
      "We are going to create a data pipeline in this project. We are going to upload a remote CSV file into the S3 bucket automatically with Python and Shell scripts running in an EC2 instance. Then, we are going to create a Lambda function using a container image. Once the CSV file is uploaded to the S3 bucket, the Lambda function will be triggered. The main target of the Lambda function will be modifying the CSV data and fixing the errors. We are going to create an RDS database as well and will upload the modified data into a table inside this database. Once the upload is completed, we will be able to monitor the data using DBeaver and we will connect to RDS using an SSH tunnel via EC2 user.",
    tech_stack: ["Lambda", "EC2", "S3","RDS","ECR","Docker","Shell","DBeaver","MySQL"],
    github_url: "https://github.com/salesp07/Pokedex-ReactApp",
    demo_url: "https://pokedex-salesp07.netlify.app/",
  },
  {
    img: "/jobDetect.png",
    title: "AWS End-to-End Streaming Data Processing",
    description:
      "Scrape the data from a website and save it as JSON. Send the JSON data record by record (EC2) to a Kinesis Data Stream and buffer in Firehose. Upload the file to the S3 bucket and trigger the Lambda function. Lambda function converts it to parquet. After uploading to another S3 bucket, trigger Glue workflow. Create a Glue table with Crawler and run the Glue ETL Job. After cleaning the data, upload it to S3 bucket and create a Glue table. Create a QuickSight dashboard using Redshift and Athena in the end.",
    tech_stack: ["Kinesis",
    "Glue",
    "Lambda",
    "Redshift",
    "Athena",
    "Spark",
    "S3",
    "EC2",
    "QuickSight",
    "Parquet"],
    github_url: "https://github.com/salesp07/JobDetectNode",
    demo_url: "https://jobdetective.onrender.com/",
  },
  {
    img: "/jobDetect.png",
    title: "Streaming Data Processing",
    description:
      "Take a compressed data source from a URL Process the raw data either with PySpark or Pandas and use HDFS as the file storage, check resources with Apache Hadoop YARN. Use a data generator to simulate streaming data, and send the data to Apache Kafka (producer). Read the streaming data from the Kafka topic (consumer) using PySpark (Spark Structured Streaming). Write the streaming data to Elasticsearch, and visualize it using Kibana. Write the streaming data to MinIO (AWS Object Storage). Use Apache Airflow to orchestrate the whole data pipeline. Use Docker to containerize Elasticsearch, Kibana, and MinIO.",
    tech_stack: ["Python", "Spark", "Kafka", "Airflow","Docker","Hadoop","ElasticSearch","Kibana","MinIO","Pandas"],
    github_url: "https://github.com/salesp07/JobDetectNode",
    demo_url: "https://jobdetective.onrender.com/",
  },
];

// --------------------------------------- Skills

export const stackList = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    name: "AWS",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    name: "Python",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg",
    name: "Spark",
  },
  {
    img: "https://svn.apache.org/repos/asf/comdev/project-logos/originals/kafka.svg",
    name: "Kafka",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Hadoop_logo.svg",
    name: "Hadoop",
  },
  {
    img: "https://svn.apache.org/repos/asf/comdev/project-logos/originals/hbase-1.svg",
    name: "HBase",
  },
  {
    img: "https://svn.apache.org/repos/asf/comdev/project-logos/originals/airflow-1.svg",
    name: "Airflow",
  },
  {
    img: "https://svn.apache.org/repos/asf/comdev/project-logos/originals/cassandra-1.svg",
    name: "cassandra",
  },
  
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
    name: "MySQL",
  },
  {
    img: "https://svn.apache.org/repos/asf/comdev/project-logos/originals/avro.svg",
    name: "Avro",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/4/47/Apache_Parquet_logo.svg",
    name: "Parquet",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    name: "Git",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Apache_Hive_logo.svg",
    name: "Flink",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg",
    name: "Flask",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    name: "Java",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
    name: "VS Code",
  },
];
