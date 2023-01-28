# Sales Dashboard

There are two folder inside main directory ProjectSales, one for the Client Side(Client Folder) and Server Side(Server Folder). 
To run the application, three parts needs to run simultaneously.

1. Client Folder
2. Server.js from Server Folder
3. filesearch.js from Server Folder

This app contains an opinionated set of components for modern web development, including:

* React
* Node.js
* SASS
* MYSQL


## Development Setup

To install all development dependencies, In both the Client and Server folder, run:

```sh
npm install
```

## Steps to run the application

1. In Server Folder, run:

```sh
cd Server
node filesearch.js
```

Note: filesearch.js file is use to search for csv file inside Dataincomming folder and checks for dashboard database, if not creates one and inserts into it.

2. In Server Folder, run:

```sh
npm run server
```
The above command runs the server at port `5000` connecting the database.

3. In Client Folder, run:

```sh
cd ../Client
npm run start
```
The above command runs the React Application at `localhost:3000`

## API's used and Data Fetched

* `/salesdates`

| transaction_date | total_sales |
|------------------|-------------|
| 2023-11-1        | 4574        |

* `/salesbybrand`

| BrandName | MostSoldProduct | TotalQuantitySold | TotalRevenue | TotalProfit |
|-----------|-----------------|-------------------|--------------|-------------|
| Gucci     | SilkSonic       | 123               | 5000         | 3000        |

* `/salesbyproduct`

| product_id | productname | brandname | category | TotalQuantitySold | TotalRevenue | TotalProfit |
|------------|-------------|-----------|----------|-------------------|--------------|-------------|
| 1          | SilkSonic   | Gucci     | Clothing | 123               | 5000         | 3000        |

## Screenshot

![Homepage](https://user-images.githubusercontent.com/55127362/215240774-db587cc3-b292-4f48-99db-7fea7d33549f.png)

