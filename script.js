*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

body{
background:linear-gradient(135deg,#ff9ad5,#b388ff);
min-height:100vh;
overflow-x:hidden;
color:white;
}

.loading{
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background:#111;
}

.loading h2{
font-size:45px;
font-family:'Great Vibes',cursive;
}

.hero{
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
padding:20px;
}

.hero h1{
font-size:55px;
font-family:'Great Vibes',cursive;
margin-bottom:20px;
}

.hero p{
max-width:600px;
line-height:1.8;
font-size:18px;
}

button{
margin-top:35px;
padding:15px 40px;
border:none;
border-radius:50px;
font-size:18px;
background:white;
color:#8b5cf6;
cursor:pointer;
transition:.3s;
}

button:hover{
transform:scale(1.08);
}

.letter{
display:none;
padding:80px 25px;
max-width:900px;
margin:auto;
}

.letter h2{
font-size:42px;
margin-bottom:30px;
font-family:'Great Vibes',cursive;
}

#typing{
background:rgba(255,255,255,.18);
backdrop-filter:blur(20px);
padding:30px;
border-radius:20px;
line-height:2;
font-size:18px;
}

.musicBtn{
display:inline-block;
margin-top:30px;
background:white;
padding:15px 30px;
border-radius:50px;
text-decoration:none;
color:#8b5cf6;
font-weight:bold;
}

.gallery{
padding:100px 20px;
text-align:center;
}

.gallery h2{
font-size:45px;
margin-bottom:40px;
font-family:'Great Vibes',cursive;
}

.photos{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:20px;
}

.photos img{
width:100%;
border-radius:20px;
transition:.4s;
box-shadow:0 10px 25px rgba(0,0,0,.25);
}

.photos img:hover{
transform:scale(1.05);
}

.end{
padding:100px 20px;
text-align:center;
}

.end h2{
font-size:55px;
font-family:'Great Vibes',cursive;
margin-bottom:20px;
}

.end p{
font-size:20px;
line-height:2;
}
