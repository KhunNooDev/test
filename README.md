# TouchMyLike
  วิธีการเอา Code มาใช้
  
  
  
  
1) `git clone https://github.com/KhunNooDev/test.git`
2) cd test
3) npm i
4) npm start

  วิธีการ deploy react to github pages
1) ไปที่ไฟล์ React 
2) เปิด cmd เพื่อที่จะติดตั้ง git ลงในไฟล์
  - git config --global user.name {username github}
  - git config --local user.email {email github}
  - git init
  - git add .
  - git commit -m "พิมพ์อะไรก็ได้"
  - git remote add origin https:// ที่อยู่ Repositories 
  - git push origin master
3) จากนั้นใช้ code: npm install --save gh-pages
4) เปิดไฟล์ที่ชื่อว่า "package.json" 
  - "homepage":"https://[username].github.io/[ชื่อ Repositories]/",
  - ไปที่:
  ```json
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject",
  ```
  
  ใส่ 2 code นี้ลงไป:
  ```json
    - "predeploy":"npm run build",
    - "deploy":"gh-pages -d build"
   },
   ```
   
5) ทำการ Deploy โดยการใช้: npm run deploy
6) "https://[username].github.io/[ชื่อ Repositories]/" นี้คือ Link web ของเรา



## สมาชิกในทีม!
|<a href=""><img src="https://github.com/KhunNooDev/test/blob/master/img/tml_1.jpg" width="120" height="120"></a>|<a href=""><img src="https://github.com/KhunNooDev/test/blob/master/img/tml_3.jpg" width="120" height="120"></a>|<a href=""><img src="https://github.com/KhunNooDev/test/blob/master/img/tml_2.jpg" width="120" height="120"></a>|
|:-------------:|:-------------:|:-------------:|
| KhunNooDev      | ArmDev      | EarthDev      |
| [@KhunNooDev](https://github.com/KhunNooDev) | [@Bestculling](https://github.com/Bestculling) | [@parametrittikai](https://github.com/parametrittikai)

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) 
