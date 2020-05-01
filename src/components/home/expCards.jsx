import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./home.module.scss";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "2% 15% 5% 15%",
    [theme.breakpoints.down(900)]: {
      margin: "2% 10% 5% 10%",
    },
    [theme.breakpoints.down(550)]: {
      margin: "2% 5% 5% 5%",
    },
  },

  heading: {
    fontFamily: ' "Khula", sans-serif',
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "2vw",
    fontWeight: "bold",
    margin: "0",
    color: "#4a4750",
  },

  title: {
    fontFamily: ' "Khula", sans-serif',
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "3vw",
    fontWeight: "bold",
    margin: "0",
    color: "#4a4750",
  },
}));

export default function ControlledExpansionPanels() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card elevation={0}>
        <div className={styles.infoSection}>
          <div id="masks" className={styles.masks}>
            <h2 className={styles.title}>When to use a mask</h2>
            <div className={styles.content}>
              <ul>
                <li>
                  If you are healthy, you only need to wear a mask if you are
                  taking care of a person with suspected 2019-nCoV infection.
                </li>
                <li>Wear a mask if you are coughing or sneezing.</li>
                <li>
                  Masks are effective only when used in combination with
                  frequent hand-cleaning with alcohol-based hand rub or soap and
                  water.
                </li>
                <li>
                  If you wear a mask, then you must know how to use it and
                  dispose of it properly.
                </li>
              </ul>
              <h2 className={styles.subtitle}>
                When and how to wear medical masks to protect against
                coronavirus
              </h2>
              <ul>
                <li>
                  Before putting on a mask, clean hands with alcohol-based hand
                  rub or soap and water.
                </li>
                <li>
                  Cover mouth and nose with mask and make sure there are no gaps
                  between your face and the mask.
                </li>
                <li>
                  Avoid touching the mask while using it; if you do, clean your
                  hands with alcohol-based hand rub or soap and water.
                </li>
                <li>
                  To remove the mask: remove it from behind (do not touch the
                  front of mask); discard immediately in a closed bin; clean
                  hands with alcohol-based hand rub or soap and water.
                </li>
              </ul>
            </div>
          </div>
          {/* MYTHS----------------------- */}
          <div id="myths" className={styles.myth}>
            <h2 className={styles.title}>myth busters</h2>
            <div className={styles.content}>
              <h2 className={styles.subtitle}>
                Exposing yourself to the sun or to temperatures higher than 25C
                degrees DOES NOT prevent the coronavirus disease (COVID-19)
              </h2>
              <p>
                You can catch COVID-19, no matter how sunny or hot the weather
                is. Countries with hot weather have reported cases of COVID-19.
                To protect yourself, make sure you clean your hands frequently
                and thoroughly and avoid touching your eyes, mouth, and nose.
              </p>
              <h2 className={styles.subtitle}>
                You can recover from the coronavirus disease (COVID-19).
                Catching the new coronavirus DOES NOT mean you will have it for
                life.
              </h2>
              <p>
                Most of the people who catch COVID-19 can recover and eliminate
                the virus from their bodies. If you catch the disease, make sure
                you treat your symptoms. If you have cough, fever, and
                difficulty breathing, seek medical care early – but call your
                health facility by telephone first. Most patients recover thanks
                to supportive care.
              </p>
              <h2 className={styles.subtitle}>
                Being able to hold your breath for 10 seconds or more without
                coughing or feeling discomfort DOES NOT mean you are free from
                the coronavirus disease (COVID-19) or any other lung disease.
              </h2>
              <p>
                The most common symptoms of COVID-19 are dry cough, tiredness
                and fever. Some people may develop more severe forms of the
                disease, such as pneumonia. The best way to confirm if you have
                the virus producing COVID-19 disease is with a laboratory test.
                You cannot confirm it with this breathing exercise, which can
                even be dangerous.
              </p>
              <h2 className={styles.subtitle}>
                Drinking alcohol does not protect you against COVID-19 and can
                be dangerous
              </h2>
              <p>
                Frequent or excessive alcohol consumption can increase your risk
                of health problems.
              </p>
            </div>
          </div>
          {/* SYMPTOMS---------------------- */}
          <div id="symptoms" className={styles.symptoms}>
            <h2 className={styles.title}>Watch for symptoms</h2>
            <div className={styles.content}>
              <p>
                Reported illnesses have ranged from mild symptoms to severe
                illness and death for confirmed coronavirus disease 2019
                (COVID-19) cases.
              </p>
              <p>
                These symptoms may appear{" "}
                <strong>2-14 days after exposure</strong> (based on the
                incubation period of MERS-CoV viruses).
              </p>
              <ul>
                <li>Fever</li>
                <li>Cough</li>
                <li> Shortness of breath</li>
              </ul>
              <h2 className={styles.subtitle}>
                When to Seek Medical Attention
              </h2>
              <p>
                If you develop <strong>emergency warning signs</strong> for
                COVID-19 get <strong>medical attention immediately</strong>.
                Emergency warning signs include*:
              </p>
              <ul>
                <li>Trouble breathing</li>
                <li>Persistent pain or pressure in the chest</li>
                <li>New confusion or inability to arouse</li>
                <li>Bluish lips or face</li>
              </ul>
              <p>
                *This list is not all inclusive. Please consult your medical
                provider for any other symptoms that are severe or concerning.
              </p>
            </div>
          </div>
          {/* hgh risk----------------- */}
          <div id="medical" className={styles.highRisk}>
            <h2 className={styles.title}>Higher Risk</h2>
            <div className={styles.content}>
              <p>
                COVID-19 is a new disease and there is limited information
                regarding risk factors for severe disease. Based on currently
                available information and clinical expertise, older adults and
                people of any age who have serious underlying medical conditions
                might be at higher risk for severe illness from COVID-19.
              </p>
              <h2 className={styles.subtitle}>
                Based on what we know now, those at high-risk for severe illness
                from COVID-19 are:
              </h2>
              <ul>
                <li>People aged 65 years and older</li>
                <li>
                  People who live in a nursing home or long-term care facility
                </li>
                <li>
                  People of all ages with underlying medical conditions,
                  particularly if not well controlled, including:
                  <ul style={{ listStyleType: "circle" }}>
                    <li>
                      People with chronic lung disease or moderate to severe
                      asthma
                    </li>
                    <li>People who have serious heart conditions</li>
                    <li>People who are immunocompromised </li>
                    <ul>
                      <li>
                        Many conditions can cause a person to be
                        immunocompromised, including cancer treatment, smoking,
                        bone marrow or organ transplantation, immune
                        deficiencies, poorly controlled HIV or AIDS, and
                        prolonged use of corticosteroids and other immune
                        weakening medications
                      </li>
                    </ul>
                    <li>
                      People with severe obesity (body mass index [BMI] ≥40)
                    </li>
                    <li>People with diabetes</li>
                    <li>
                      People with chronic kidney disease undergoing dialysis
                    </li>
                    <li>People with liver disease</li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  People who are pregnant should be monitored since they are
                  known to be at risk with severe viral illness, however, to
                  date data on COVID-19 has not shown increased risk
                </li>
              </ul>
            </div>
          </div>

          {/* spreadng----------------- */}
          <div id="spreads" className={styles.spread}>
            <h2 className={styles.title}>Know How it Spreads</h2>
            <div className={styles.content}>
              <ul>
                <li>
                  There is currently no vaccine to prevent coronavirus disease
                  2019 (COVID-19).
                </li>
                <li>
                  <strong>
                    The best way to prevent illness is to avoid being exposed to
                    this virus.
                  </strong>{" "}
                </li>
                <li>
                  The virus is thought to spread mainly from person-to-person.{" "}
                </li>
                <ul style={{ listStyleType: "circle" }}>
                  <li>
                    Between people who are in close contact with one another
                    (within about 6 feet).
                  </li>
                  <li>
                    Through respiratory droplets produced when an infected
                    person coughs or sneezes.
                  </li>
                </ul>
                <li>
                  These droplets can land in the mouths or noses of people who
                  are nearby or possibly be inhaled into the lungs.
                </li>
              </ul>
              <h2 className={styles.subtitle}>How easily the virus spreads</h2>
              <p>
                How easily a virus spreads from person-to-person can vary. Some
                viruses are highly contagious, like measles, while other viruses
                do not spread as easily. Another factor is whether the spread is
                sustained, which means it goes from person-to-person without
                stopping.
              </p>
              <ul>
                <li>
                  Information from the ongoing COVID-19 pandemic suggest that
                  this virus is spreading more efficiently than influenza, but
                  not as efficiently as measles, which is highly contagious.
                </li>
                <li>
                  The virus that causes COVID-19 is spreading very easily and
                  sustainably between people.
                </li>
              </ul>
            </div>
          </div>
          {/* protent---------------------- */}
          <div id="protect" className={styles.protect}>
            <h2 className={styles.title}>What to Do if You Are Sick</h2>
            <div className={styles.content}>
              <p>
                If you have a fever or cough, you might have COVID-19. Most
                people have mild illness and are able to recover at home. Keep
                track of your symptoms. If you have an emergency warning sign
                (including trouble breathing), get medical attention right away.
              </p>
              <h2 className={styles.subtitle}>
                Steps to help prevent the spread of COVID-19 if you are sick{" "}
              </h2>
              <ul>
                <li>
                  <strong>Stay home:</strong> Most people with COVID-19 have
                  mild illness and are able to recover at home without medical
                  care. Do not leave your home, except to get medical care. Do
                  not visit public areas.
                </li>
                <li>
                  {" "}
                  <strong>Stay in touch with your doctor.</strong> Call before
                  you get medical care. Be sure to get care if you have trouble
                  breathing, or have any other emergency warning signs, or if
                  you think it is an emergency.
                </li>
                <li>
                  {" "}
                  <strong>Avoid public transportation:</strong> Avoid using
                  public transportation, ride-sharing, or taxis.
                </li>
              </ul>
              <h2 className={styles.subtitle}>
                Separate yourself from other people in your home, this is known
                as home isolation
              </h2>
              <ul>
                <li>
                  <strong>Stay away from others:</strong> As much as possible,
                  you stay away from others. You should stay in a specific “sick
                  room” if possible, and away from other people in your home.
                  Use a separate bathroom, if available.{" "}
                </li>
              </ul>
            </div>
          </div>

          {/* travel----------------- */}
          <div id="travel" className={styles.travel}>
            <h2 className={styles.title}>Travel</h2>
            <div className={styles.content}>
              <h2 className={styles.subtitle}>
                Canceling or Postponing Travel
              </h2>
              <p>
                <strong>
                  CDC recommends that travelers avoid all nonessential
                  international travel because of the COVID-19 pandemic.
                </strong>{" "}
                Some health care systems are overwhelmed and there may be
                limited access to adequate medical care in affected areas. Many
                countries are implementing travel restrictions and mandatory
                quarantines, closing borders, and prohibiting non-citizens from
                entry with little advance notice. Airlines have cancelled many
                international flights and in-country travel may be
                unpredictable. If you choose to travel internationally, your
                travel plans may be disrupted, and you may have to remain
                outside the United States for an indefinite length of time.
              </p>
              <p>
                CDC also recommends all travelers defer all cruise ship travel
                worldwide.
              </p>
              <p>
                If you must travel, take the following steps to help reduce your
                chances of getting sick:
              </p>
              <ul>
                <li>Avoid contact with sick people.</li>
                <li>
                  Avoid touching your eyes, nose, or mouth with unwashed hands.
                </li>
                <li>
                  Wash your hands often with soap and water for at least 20
                  seconds. If soap and water are not readily available, use an
                  alcohol-based hand sanitizer that contains at least 60%
                  alcohol.
                  <ul>
                    <li>
                      It is especially important to clean hands after going to
                      the bathroom; before eating; and after coughing, sneezing
                      or blowing your nose.
                    </li>
                  </ul>
                </li>
                <li>
                  Make sure you are up to date with your routine vaccinations,
                  including measles-mumps-rubella (MMR) vaccine and the seasonal
                  flu vaccine.
                </li>
              </ul>
              <h2 className={styles.subtitle}>Air or Cruise Travel</h2>
              <p>
                Because of how air circulates and is filtered on airplanes, most
                viruses and other germs do not spread easily. Although the risk
                of infection on an airplane is low, try to avoid contact with
                sick passengers, avoid touching your eyes, nose or mouth with
                unwashed hands, and wash your hands often with soap and water
                for at least 20 seconds or use hand sanitizer that contains at
                least 60% alcohol.
              </p>
            </div>
          </div>

          {/* worry----------- */}

          <div id="worry" className={styles.worry}>
            <h2 className={styles.title}>Should I worry about COVID-19? </h2>
            <div className={styles.content}>
              <p>
                Illness due to COVID-19 infection is generally mild, especially
                for children and young adults. However, it can cause serious
                illness: about 1 in every 5 people who catch it need hospital
                care. It is therefore quite normal for people to worry about how
                the COVID-19 outbreak will affect them and their loved ones.
              </p>
              <p>
                {" "}
                We can channel our concerns into actions to protect ourselves,
                our loved ones and our communities. First and foremost among
                these actions is regular and thorough hand-washing and good
                respiratory hygiene. Secondly, keep informed and follow the
                advice of the local health authorities including any
                restrictions put in place on travel, movement and gatherings.{" "}
              </p>
            </div>
          </div>

          {/* child------------------ */}
          <div id="childhood" className={styles.childhood}>
            <h2 className={styles.title}>
              Maintaining Childhood Immunizations During COVID-19 Pandemic
            </h2>
            <p>
              The COVID-19 pandemic is changing rapidly and continues to affect
              communities across the United States differently. Some of the
              strategies used to slow the spread of disease in communities
              include postponing or cancelling non-urgent elective procedures
              and using telemedicine instead of face-to-face encounters for
              routine medical visits.
            </p>
            <p>
              Ensuring the delivery of newborn and well-child care, including
              childhood immunization, requires different strategies. Healthcare
              providers in communities affected by COVID-19 are using strategies
              to separate well visits from sick visitsexternal icon. Examples
              include:
            </p>
            <ul>
              <li>
                Scheduling well visits in the morning and sick visits in the
                afternoon
              </li>
              <li>
                Separating patients spatially, such as by placing patients with
                sick visits in different areas of the clinic or another location
                from patients with well visits.
              </li>
              <li>
                Collaborating with providers in the community to identify
                separate locations for holding well visits for children.
              </li>
            </ul>
            <p>
              Because of personal, practice, or community circumstances related
              to COVID-19, some providers may not be able to provide well child
              visits, including provision of immunizations, for all patients in
              their practice.{" "}
              <strong>
                If a practice can provide only limited well child visits,
                healthcare providers are encouraged to prioritize newborn care
                and vaccination of infants and young children (through 24 months
                of age) when possible.
              </strong>{" "}
              CDC is monitoring the situation and will continue to provide
              guidance.
            </p>
          </div>

          {/* bottom card */}
        </div>
      </Card>
    </div>
  );
}
