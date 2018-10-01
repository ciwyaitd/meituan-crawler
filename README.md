### MEITUAN-CRAWLER

------
This project purpose to crawl data from MeiTuan. In this project, it just crawls the data of the city Shenzhen. Shenzhen's city code is 30, if you want to crawl other cities, please replace the city code from this link: http://api.meituan.com/group/v4/deal/select/city/30/cate/1. Besides, this project depends on Redis and PostgreSQL, you can run these by docker or your local services. You can watch the schema and data in http://localhost:8080.

### Usage

Move into the project directory then install dependencies
```
npm install
```

Run Redis and PostgreSQL by Docker
```
npm run services
```

Create database and tables by script
```
npm run script
```

Start to crawl
```
npm run start
```
