import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, Check, ChevronDown, CircleHelp, FlaskConical, Leaf,
  Menu, ShieldCheck, Sparkles, X
} from "lucide-react";
import "./styles.css";

const ingredients = [
  ["4% Niacinamide", "Selected as the hero active for pigmentation care and skin-barrier support."],
  ["2% Tranexamic Acid", "Selected as a complementary pigmentation-care active."],
  ["0.5% Alpha-Arbutin", "Selected for brightening-focused skincare."],
  ["2% Panthenol", "Supports hydration and skin comfort."],
  ["Ceramide Complex", "Supports the skin barrier."],
  ["Glycerin", "Helps maintain skin hydration."],
  ["Allantoin", "Selected for a soothing-focused formulation."],
  ["Squalane", "Provides lightweight moisturization."]
];

const faqs = [
  ["What is AERIVA?", "AERIVA is an underarm-care product concept focused on gradual pigmentation care, skin comfort and barrier support."],
  ["Is AERIVA a whitening cream?", "AERIVA is positioned as an underarm brightening and skincare product, not as a skin-whitening product."],
  ["Is AERIVA fragrance-free?", "The proposed MVP is fragrance-free."],
  ["Who is AERIVA designed for?", "It is designed primarily for consumers concerned about uneven underarm pigmentation, particularly those who regularly shave or wax."],
  ["How quickly will I see results?", "AERIVA is not positioned around instant results. Any pigmentation-related improvement would need to be evaluated through appropriate product testing."],
  ["Is AERIVA clinically tested?", "Not yet. AERIVA is currently an MVP/product concept. Appropriate safety and efficacy testing would be required before commercial launch and corresponding claims."]
];

function ProductMockup({ small = false }) {
  return (
    <div className={`mockup-wrap ${small ? "small" : ""}`}>
      <div className="glow" />
      <div className="product-shadow" />
      <div className="tube">
        <div className="tube-cap" />
        <div className="tube-label">
          <span className="tiny">AERIVA</span>
          <strong>UNDERARM<br/>RESET CREAM</strong>
          <span className="micro">BRIGHTEN • REPAIR • SOOTHE</span>
          <span className="micro">FRAGRANCE-FREE</span>
          <span className="weight">50 g</span>
        </div>
      </div>
      <div className="ingredient-pill pill-one"><Sparkles size={14}/> 4% Niacinamide</div>
      <div className="ingredient-pill pill-two"><ShieldCheck size={14}/> Barrier Support</div>
    </div>
  );
}

function App() {
  const [menu, setMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenu(false);

  return (
    <div className="app">
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <a href="#home" className="brand" onClick={close}>AERIVA</a>
        <nav className={menu ? "navlinks open" : "navlinks"}>
          {["home","problem","product","ingredients","how","faq"].map((id, i) => (
            <a key={id} href={`#${id}`} onClick={close}>{["Home","The Problem","Product","Ingredients","How It Works","FAQ"][i]}</a>
          ))}
        </nav>
        <a href="#survey" className="nav-cta">Join Early Access <ArrowRight size={16}/></a>
        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle menu">
          {menu ? <X/> : <Menu/>}
        </button>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span /> RESEARCH-INSPIRED MVP · CONCEPT STAGE</div>
            <h1>Your underarms need <em>more</em> than brightening.</h1>
            <p className="lead">Meet AERIVA Underarm Reset Cream — a gentle, fragrance-free skincare concept designed to combine gradual pigmentation care with skin-comfort and barrier-support ingredients.</p>
            <div className="actions">
              <a className="btn primary" href="#survey">Join Early Access <ArrowRight size={18}/></a>
              <a className="btn secondary" href="#product">Explore AERIVA</a>
            </div>
            <div className="hero-note"><Check size={16}/> Fragrance-free concept &nbsp;·&nbsp; 50 g &nbsp;·&nbsp; Proposed MVP price ₹349</div>
          </div>
          <ProductMockup/>
        </section>

        <section id="problem" className="section soft">
          <div className="section-head reveal">
            <div className="eyebrow">THE PROBLEM</div>
            <h2>Why just <em>brighten?</em></h2>
            <p>Underarm skin can experience friction, shaving, waxing, dryness and irritation. For some consumers, these concerns exist alongside uneven pigmentation.</p>
          </div>
          <div className="problem-grid">
            {[
              ["01","Uneven pigmentation","Dark or uneven-looking underarms can affect confidence."],
              ["02","Hair removal","Regular shaving or waxing can be part of the everyday underarm-care routine."],
              ["03","Irritation & dryness","Friction and grooming can leave skin feeling uncomfortable or dry."],
              ["04","Existing product frustration","Consumers may want pigmentation care without an unnecessarily harsh routine."]
            ].map(([n,t,d]) => (
              <article className="info-card reveal" key={n}>
                <span className="card-num">{n}</span><h3>{t}</h3><p>{d}</p>
              </article>
            ))}
          </div>
          <div className="center-note">AERIVA is designed around a broader approach to underarm care.</div>
        </section>

        <section className="section">
          <div className="section-head centered reveal">
            <div className="eyebrow">THE AERIVA APPROACH</div>
            <h2>Meet AERIVA</h2><p>Brighten. Repair. Soothe.</p>
          </div>
          <div className="three-grid">
            {[
              [Sparkles,"BRIGHTEN","Designed to support the appearance of more even-looking underarm skin."],
              [ShieldCheck,"REPAIR","Barrier-support ingredients help maintain hydration and skin comfort."],
              [Leaf,"SOOTHE","A gentle, fragrance-free concept designed for a comfortable skincare routine."]
            ].map(([Icon,t,d]) => <article className="approach-card reveal" key={t}><div className="icon-box"><Icon/></div><h3>{t}</h3><p>{d}</p></article>)}
          </div>
          <div className="formula reveal">
            <span>Pigmentation Care</span><b>+</b><span>Barrier Support</span><b>+</b><span>Soothing Care</span><b>=</b><strong>AERIVA</strong>
          </div>
        </section>

        <section id="product" className="section product-section">
          <div className="product-visual"><ProductMockup small/></div>
          <div className="product-copy reveal">
            <div className="eyebrow">THE PRODUCT</div><h2>A new approach to underarm care.</h2>
            <h3>AERIVA Underarm Reset Cream</h3>
            <ul className="check-list">
              {["50 g","Lightweight gel-cream concept","Fragrance-free","Non-sticky concept","Designed for daily underarm care"].map(x => <li key={x}><Check size={17}/>{x}</li>)}
            </ul>
            <div className="price"><span>₹349</span><small>Proposed MVP Price</small></div>
            <a href="#survey" className="btn primary">Join the MVP Trial <ArrowRight size={18}/></a>
          </div>
        </section>

        <section id="ingredients" className="section soft">
          <div className="section-head centered reveal">
            <div className="eyebrow">FORMULATION CONCEPT</div><h2>What's inside the concept?</h2>
          </div>
          <div className="ingredient-grid">
            {ingredients.map(([t,d], i) => <article className="ingredient-card reveal" key={t}><span>0{i+1}</span><FlaskConical size={20}/><h3>{t}</h3><p>{d}</p></article>)}
          </div>
          <p className="disclaimer">Ingredient percentages shown are proposed MVP formulation targets and may change following professional formulation, stability and safety testing.</p>
        </section>

        <section className="section">
          <div className="section-head centered reveal"><div className="eyebrow">WHY AERIVA</div><h2>More than a brightening cream.</h2></div>
          <div className="compare reveal">
            <div><span>TRADITIONAL APPROACH</span><h3>Focus primarily on pigmentation</h3></div>
            <div className="compare-arrow">→</div>
            <div className="accent"><span>AERIVA APPROACH</span><h3>Pigmentation care + skin comfort + barrier support</h3></div>
          </div>
          <div className="three-points">
            {["Barrier-first approach","Designed for grooming-prone skin","Fragrance-free concept"].map((x,i)=><div key={x}><b>0{i+1}</b><span>{x}</span></div>)}
          </div>
          <div className="tagline">Don't just lighten. <em>Reset.</em></div>
        </section>

        <section id="how" className="section soft">
          <div className="section-head centered reveal"><div className="eyebrow">HOW IT WORKS</div><h2>A simple three-step ritual.</h2></div>
          <div className="steps">
            {[["01","CLEAN","Gently clean the underarm area and pat dry."],["02","APPLY","Apply a small amount evenly to the underarm."],["03","MAINTAIN","Use consistently according to the final validated product directions."]].map(([n,t,d])=><div className="step reveal" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}
          </div>
          <div className="safety"><ShieldCheck size={19}/><span>Do not apply to broken or actively irritated skin. Stop use if significant irritation occurs. Follow the final validated product instructions.</span></div>
        </section>

        <section className="section journey">
          <div className="section-head centered reveal"><div className="eyebrow">CUSTOMER JOURNEY</div><h2>Your AERIVA Reset Journey</h2></div>
          <div className="journey-track">{["Problem Recognition","Discover AERIVA","Learn About Underarm Care","Try AERIVA","Build a Routine","Track Your Experience","Share Feedback","Improve & Repeat"].map((x,i)=><div key={x} className="journey-item reveal"><span>{String(i+1).padStart(2,"0")}</span><p>{x}</p></div>)}</div>
        </section>

        <section className="section evidence">
          <div className="evidence-box reveal">
            <div className="evidence-icon"><FlaskConical/></div>
            <div><div className="eyebrow">RESEARCH / EVIDENCE</div><h2>Built around the skin, not just the pigment.</h2><p>Published research has examined the relationship between axillary hyperpigmentation, irritation, hair-removal practices and skin-barrier characteristics. A clinical study has also investigated 4% niacinamide for axillary hyperpigmentation.</p><div className="badges"><span>Research-Inspired MVP</span><span>Concept Stage</span></div><small>These research observations inform the concept; AERIVA itself is not clinically tested.</small></div>
          </div>
        </section>

        <section className="section soft">
          <div className="persona reveal">
            <div><div className="eyebrow">TARGET CUSTOMER</div><h2>Designed for regular groomers.</h2><div className="persona-name">THE REGULAR GROOMER</div></div>
            <div className="persona-meta"><b>18–35</b><ul>{["Regularly shaves or waxes","Concerned about uneven underarm pigmentation","May experience dryness or irritation","Interested in skincare","Wants a simple routine","Prefers gentle/fragrance-free products"].map(x=><li key={x}><Check size={15}/>{x}</li>)}</ul></div>
          </div>
        </section>

        <section id="survey" className="section survey">
          <div className="survey-box reveal">
            <Sparkles className="survey-spark"/>
            <div className="eyebrow">MVP VALIDATION</div><h2>Help us build AERIVA.</h2>
            <p>AERIVA is currently an MVP/product-development concept. We're collecting consumer feedback to understand underarm-care needs, expectations and product preferences.</p>
            <a href="#survey-form" className="btn primary">Take the 3-Minute Survey <ArrowRight size={18}/></a>
            <a href="#survey" className="text-link">Join Early Access</a>
          </div>
        </section>

        <section id="survey-form" className="section survey-placeholder">
          <div className="placeholder-card reveal"><div className="eyebrow">SURVEY</div><h2>Your opinion shapes AERIVA.</h2><p>Tell us about your underarm-care experience and what you expect from a product like AERIVA.</p><button className="btn primary" onClick={() => alert("Google Form link will be connected here.")}>Take the Survey <ArrowRight size={18}/></button><span>Google Form link will be connected here.</span></div>
        </section>

        <section id="faq" className="section">
          <div className="section-head centered reveal"><div className="eyebrow">FAQ</div><h2>Questions, answered.</h2></div>
          <div className="faq">{faqs.map(([q,a],i)=><div className={`faq-item ${openFaq===i ? "active":""}`} key={q}><button onClick={()=>setOpenFaq(openFaq===i?-1:i)}><span>{q}</span><ChevronDown size={20}/></button>{openFaq===i && <p>{a}</p>}</div>)}</div>
        </section>

        <section className="final-cta">
          <ProductMockup small/>
          <div className="final-copy"><div className="eyebrow">AERIVA</div><h2>Ready for a new underarm-care routine?</h2><p>Brighten. Repair. Soothe.</p><div className="actions"><a href="#survey" className="btn light">Take the Survey</a><a href="#survey" className="btn outline-light">Join Early Access</a></div></div>
        </section>
      </main>

      <footer>
        <div className="footer-main"><div><a href="#home" className="brand">AERIVA</a><p>Underarm Reset Cream<br/>Brighten • Repair • Soothe</p></div><div className="footer-links">{["About","Product","Ingredients","How It Works","FAQ","Survey","Contact"].map(x=><a key={x} href={x==="About"?"#problem":`#${x.toLowerCase().replaceAll(" ","-")}`}>{x}</a>)}</div></div>
        <div className="footer-bottom">AERIVA is currently a product-development MVP. Product formulation, claims, safety and efficacy are subject to professional testing and validation before commercial launch.</div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);