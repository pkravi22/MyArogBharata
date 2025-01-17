import React from 'react';
import { useParams } from 'react-router-dom';
import SubHero from './SubHero';
import Benefits from './Benefits';
import Plans from './Plans';
import Testimonial from './Testimonial';
import FAQ from '../faq/Faq';
import Joiners from './Joiners';
import Timings from './Timings';


const Subcategory = ({ category, program }) => {
  const { categoryId, programId } = useParams();
  console.log(category)
  const selectedCategory=category[categoryId];
  console.log(selectedCategory)
  console.log(categoryId,programId);
  console.log(programId)
  
  const selectedProgram = selectedCategory.programs[programId];
  console.log(selectedProgram.discription || "Join us for Your physical health")

  return (
    <div className="py-4" >
      <SubHero title={selectedProgram.title} image={selectedProgram.subHeroImage} description={selectedProgram.description} bgImage={selectedCategory.bgImage}  />
      
      <Benefits benefits={selectedProgram.benefits} />
      <Joiners joiners={selectedProgram.joiners} />
      <Timings/>
      <Plans plans={selectedProgram.premiumPlans} />
      <Testimonial testimonials={selectedProgram.testimonials} color=""/>
      <FAQ image={selectedCategory.faqImageUrl} />
    </div>
  );
};




const Plan = ({ plans }) => (
  <section className="plans">
    <h3>Plans</h3>

    {plans.map((plan, index) => (
      <div key={index}>
        <h4>{plan.plan}</h4>
        <p>{plan.price}</p>
      </div>
    ))}
  </section>
);



export default Subcategory;
