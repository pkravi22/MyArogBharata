import { useState } from 'react'
import Home from './pages/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.css'
import pic1 from "./assets/pic1.webp"
import pic2 from "./assets/pic2.webp"
import Hero from "./components/heroHomepage/Hero";
import Category from "./components/card/Category";
function App() {
  const categories = [
    {
      title: "Female Wellness Programs",
      programs: [
        {
          title: "Female Wellness",
          description:
            "Focus on mental well-being, weight loss, and customized diet plans.",
          features: [
            "45min Live Yoga/Cardio/Pilates classes",
            "Detox",
            "Customized Diet Plan",
            "Meditation & Healing",
            "Personalized Counselling",
          ],
          imageSrc: pic1,
        },
        {
          title: "Holistic General Fitness",
          description:
            "Improve stamina, mental health, and overall body fitness.",
          features: [
            "45min Live Yoga/Cardio/Pilates classes",
            "Detox",
            "Customized Diet Plan",
            "Meditation & Healing",
            "Personalized Counselling",
          ],
          imageSrc: pic2,
        },
        {
          title: "Female Wellness",
          description:
            "Focus on mental well-being, weight loss, and customized diet plans.",
          features: [
            "45min Live Yoga/Cardio/Pilates classes",
            "Detox",
            "Customized Diet Plan",
            "Meditation & Healing",
            "Personalized Counselling",
          ],
          imageSrc: pic1,
        },
        {
          title: "Female Wellness",
          description:
            "Focus on mental well-being, weight loss, and customized diet plans.",
          features: [
            "45min Live Yoga/Cardio/Pilates classes",
            "Detox",
            "Customized Diet Plan",
            "Meditation & Healing",
            "Personalized Counselling",
          ],
          imageSrc: pic1,
        },
        {
          title: "Female Wellness",
          description:
            "Focus on mental well-being, weight loss, and customized diet plans.",
          features: [
            "45min Live Yoga/Cardio/Pilates classes",
            "Detox",
            "Customized Diet Plan",
            "Meditation & Healing",
            "Personalized Counselling",
          ],
          imageSrc: pic1,
        },
      ],
    },
    {
      title: "Men's Wellness Programs",
      programs: [
        {
          title: "Men's Sexual Health",
          description: "Enhance mental health and overall well-being.",
          features: [
            "45min Live Yoga/Cardio/Pilates classes",
            "Detox",
            "Customized Diet Plan",
            "Meditation & Healing",
            "Personalized Counselling",
          ],
          imageSrc: pic1,
        },
      ],
    },
    {
      title: "Disease Therapeutic Wellness Programs",
      programs: [
        {
          title: "Holistic General Fitness",
          description: "Therapeutic wellness for body and mind recovery.",
          features: [
            "45min Live Yoga/Cardio/Pilates classes",
            "Detox",
            "Customized Diet Plan",
            "Meditation & Healing",
            "Personalized Counselling",
          ],
          imageSrc: pic2,
        },
        {
          title: "Holistic General Fitness",
          description: "Therapeutic wellness for body and mind recovery.",
          features: [
            "45min Live Yoga/Cardio/Pilates classes",
            "Detox",
            "Customized Diet Plan",
            "Meditation & Healing",
            "Personalized Counselling",
          ],
          imageSrc: pic2,
        },
        {
          title: "Holistic General Fitness",
          description: "Therapeutic wellness for body and mind recovery.",
          features: [
            "45min Live Yoga/Cardio/Pilates classes",
            "Detox",
            "Customized Diet Plan",
            "Meditation & Healing",
            "Personalized Counselling",
          ],
          imageSrc: pic1,
        },
      ],
    },
  ];

  return (
    <>
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-8 bg-[#EFF8FF] max-w-[1920px]">
        {categories.map((category, index) => (
          <Category key={index} {...category} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default App;

