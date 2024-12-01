import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
       <div className={style.top}> 
          <div>
            <h1>Trippy</h1>
            <p>Choose your favouriate destination</p>
          </div>
          <div>
            <a href="/">
              <i className="fa-brands fa-facebook-square"></i>
              <i className="fa-brands fa-instagram-square"></i>
              <i className="fa-brands fa-twitter-square"></i>
              <i className="fa-brands fa-behance-square"></i>
            </a>
          </div>
       </div>
       <div className={style.bottom}>
          <div>
            <h4>Project</h4>
            <a href="/">ChangeLog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
          </div>
          <div>
            <h4>Community</h4>
            <a href="/">GitHub</a>
            <a href="/">Issues</a>
            <a href="/">Project</a>
            <a href="/">Twitter</a>
          </div>
          <div>
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">Troubleshooting</a>
            <a href="/">Contact Us</a>
          </div>
          <div>
            <h4>Others</h4>
            <a href="/">Terms of Service</a>
            <a href="/">Privacy Policy</a>
            <a href="/">License</a>
          </div>
       </div>
    </div>
  )
}

export default Footer
