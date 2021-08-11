import './App.css';

function App() {
  return (
    <div className="App">
      <div className="fon" style={{ backgroundImage: "url(/fon_11.webp)" }}></div>
      <div className="wrapper">

        <div className="part_left">
          <div className="photo" style={{ backgroundImage: "url(/foto.jpg)" }}></div>
          <div className="short_info_container">
            <div className="short_info">
              <div className="name">DMITRIY SAVCHUK</div>
              <div className="position">Web Developer</div>

              <div className="person_info_container">
                <div className="person_info"><div className="icon" style={{ backgroundImage: "url(/user.webp)" }}></div>29 years (9/25/1991)</div>
                <div className="person_info"><div className="icon" style={{ backgroundImage: "url(/home.webp)" }}></div>Varenikovskaya, Krasnodar, Russia</div>
                <div className="person_info"><div className="icon" style={{ backgroundImage: "url(/phone.webp)" }}></div><a href="tel: +79086752252" itemProp="telephone">+7 (908) 675-22-52</a></div>
                <div className="person_info"><div className="icon" style={{ backgroundImage: "url(/mail.webp)" }}></div><a href="mailto: neksyz@gmail.com" itemProp="email">neksyz@gmail.com</a></div>
                <div className="person_info"><div className="icon" style={{ backgroundImage: "url(/git.webp)" }}></div><a href="https://github.com/neksys-on" target="_blank" rel="noreferrer">https://github.com/neksys-on</a></div>
              </div>
              <div className="hr"/>

              <div className="skills">
                <div className="skills_title">SKILLS</div>
                <div className="skills_text">JS, TypeScript, HTML5, CSS, SASS, ES6, Node, React, Next, Express, Webpack, Nginx, Docker, Prisma, SQL, Postgres, MongoDB, GitHub, Canvas, Anime.js.</div>
              </div>

              <div className="hr"/>

              <div className="skills">
                <div className="skills_title">PROJECTS (LINKS)</div>
                <a href="https://www.bestjap.ru/" target="_blank" rel="noreferrer">Internet shop (Next.js)</a>
                <a href="https://my-web-site-azure.vercel.app/" target="_blank" rel="noreferrer">Мy developer site (Next.js)</a>
                <a href="https://spa-ashy.vercel.app/" target="_blank" rel="noreferrer">Layout of the news site (React + TypeScript, no responsive layout)</a>
              </div>
              <div className="skills">
                <div className="skills_title">GITHUB (LINKS)</div>
                <a href="https://github.com/neksys-on/test2" target="_blank" rel="noreferrer">Internet shop (Next.js)</a>
                <a href="https://github.com/neksys-on/myWebSite" target="_blank" rel="noreferrer">Мy developer site (Next.js)</a>
                <a href="https://github.com/neksys-on/SPA" target="_blank" rel="noreferrer">Layout of the news site (React + TypeScript, no responsive layout)</a>
                {/*<a href="https://github.com/neksys-on/my_business_card" target="_blank" rel="noreferrer">This site (React)</a>*/}
              </div>

            </div>
          </div>
        </div>

        <div className="part_right">
          <div className="part_right_container">
            <div className="summary_container">
              <div className="right_info_title">SUMMARY</div>
              <div className="right_info_text">I have been learning web development for more than 2 years. Worked as a freelancer, not very long. I want to gain experience in corporate development, learn how to do it correctly and effectively, develop my skills in depth.</div>
              <div className="right_info_title">EXPERIENCE</div>
              <div className="right_info_text"><div className="text_decoration">■</div>Development and deployment of a web store, with a registration system, a MongoDB database, with its own self-written CMS system, with sending notifications about orders to site owners on telegrams and mail.</div>
              <div className="right_info_text"><div className="text_decoration">■</div>For the work of my applications, I made a separate server to implement the tasks of receiving and sending data to Email, Telegram, WhatsApp.</div>
              <div className="right_info_text"><div className="text_decoration">■</div>Creation of landing pages and small sites for different needs.</div>
              <div className="right_info_text"><div className="text_decoration">■</div>Connecting transfers https://yoomoney.ru/ with receiving a response about the result of the payment with entering changes in the database, payment by the qr-code.</div>
              <div className="right_info_text"><div className="text_decoration">■</div>Web scraping with Puppeteer.</div>
              <div className="right_info_title">EDUCATION</div>
              <div className="right_info_text">Unfortunately, I have no education related to IT, except that at the time of school I went to courses in Pascal and Delphi for 2 years. I am an electrician by education, and for 7 years I worked as an electrician for maintenance of substations.</div>
              <div className="right_info_title">ANOTHER IT EXPIRIENS</div>
              <div className="right_info_text">Before doing web development, I was writing bots for games for personal use and making money on gaming resources. Basically, I made bots using AutoHotkey, and in the end I switched to C++.</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
