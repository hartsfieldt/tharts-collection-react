import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div>
        <main id="#about-me" className="has-background-white-bis">
          <section className="section">
            <h1 className="title">About Me</h1>
            <h3 className="has-text-centered is-size-5">
              "A difficult time can be more readily endured if we retain the
              conviction that our existence holds a purpose; a cause to pursue,
              a person to love, a goal to achieve."<strong>John Maxwell</strong>
            </h3>
            <p className="mt-3 is-size-5">
              Professional experience that includes sales, marketing, business
              development, employee training, communications, and writing. I
              have demonstrated the ability to multi-task and make decisions to
              move projects to completion. A persistent goal setter, project
              finisher, and skilled collaborator. I look forward to working with
              you!
            </p>
          </section>
          <section className="section">
            <div className="notification is-info is-light">
              <button className="delete is-size-5 has-text-weight-semibold"></button>
              Click on the image to view the deployed projects
            </div>
            <h1 className="title">Colborative Portfolio</h1>
            <div className="columns">
              <div className="column is-size-5 has-text-weight-semibold">
                The Ultimate Sports Tracker
                <div className="card">
                  <div className="card-image">
                    <figure>
                      <a
                        href="https://hartsfieldt.github.io/project1-sportsstats/"
                        target="_blank"
                      >
                        {/* <img src="./assets/images/sports-tracker.png" alt="basketball players"> */}
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
              <div
                className="column is-size-5 has-text-weight-semibold"
                width="358"
                height="98px"
                alt="coming soon banner"
              >
                Alternate Endings
                <a
                  href="https://alternative-endings.herokuapp.com/"
                  target="_blank"
                >
                  {/* <img src="./assets/images/mainpg.png"> */}
                </a>
              </div>
              <div
                className="column is-size-5 has-text-weight-semibold"
                width="358"
                height="98px"
                alt="coming soon banner"
              >
                OurPlace
                <a
                  href="https://github.com/hartsfieldt"
                  target="https://github.com/awchen85/project-3"
                >
                  {/* <img src="./assets/images/roommate.png"> */}
                </a>
              </div>
            </div>
          </section>
          <section className="section">
            <h1 className="title">Portfolio</h1>
            <div className="columns">
              <div className="column is-size-5 has-text-weight-semibold">
                Run Buddy
                <a
                  href="https://hartsfieldt.github.io/run-buddy/"
                  target="_blank"
                >
                  {/* <img src="./assets/images/runbuddy2.png" alt="meeting"> */}
                </a>
              </div>
              <div
                className="column is-size-5 has-text-weight-semibold"
                width="358"
                height="98px"
                alt="coming soon banner"
              >
                Horiseon
                <a
                  href="https://hartsfieldt.github.io/fixupper/"
                  target="_blank"
                >
                  {/* <img src="./assets/images/horiseon.png"> */}
                </a>
              </div>
              <div
                className="column is-size-5 has-text-weight-semibold"
                width="358"
                height="98px"
                alt="coming soon banner"
              >
                Daily Calendar
                <a
                  href="https://hartsfieldt.github.io/organizedpeople/"
                  target="_blank"
                >
                  {/* <img src="./assets/images/calendar.png"> */}
                </a>
              </div>
              <div
                className="column is-size-5 has-text-weight-semibold"
                width="358"
                height="98px"
                alt="coming soon banner"
              >
                Weather Dashboard
                <a
                  href="https://hartsfieldt.github.io/changingtemps/"
                  target="_blank"
                >
                  {/* <img src="./assets/images/weather.png"> */}
                </a>
              </div>
            </div>
          </section>
        </main>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
          integrity="sha512-HGOnQO9+SP1V92SrtZfjqxxtLmVzqZpjFFekvzZVWoiASSQgSr4cw9Kqd2+l8Llp4Gm0G8GIFJ4ddwZilcdb8A=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>
        <script src="./assets/js/script.js"></script>
      </div>
    </>
  );
};

export default About;
