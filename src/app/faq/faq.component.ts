import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {


  faqs = [
    {
      question: "What are your shipping options?",
      answer: "We offer standard shipping, expedited shipping, and in-store pickup options. Shipping rates and estimated delivery times will vary depending on your location within South Africa and the size of your order."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns and exchanges within 30 days of the date of purchase. To be eligible for a return or exchange, the item must be in its original condition and packaging, with all tags and labels attached. Shipping and handling fees are the responsibility of the customer, unless the item is defective or damaged."
    },
    {
      question: "Do you offer discounts or promotions?",
      answer: "Yes, we offer discounts and promotions throughout the year. To stay up-to-date on our latest offers, sign up for our newsletter or follow us on social media."
    },
    {
      question: "Can I cancel or modify my order after it has been placed?",
      answer: "We process orders quickly, so please contact us as soon as possible if you need to cancel or modify your order. We will do our best to accommodate your request, but we cannot guarantee that changes can be made once an order has been processed."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and SnapScan. We do not accept personal checks or money orders."
    },
    {
      question: "Do you offer gift cards?",
      answer: "Yes, we offer gift cards in a variety of denominations. Gift cards can be purchased in-store or online."
    },
    {
      question: "What is your warranty policy?",
      answer: "We stand behind the quality of our products and offer a one-year limited warranty on all of our items. If you experience any issues with your purchase within one year of the date of purchase, please contact us for assistance."
    },
    {
      question: "Can I track my order?",
      answer: "Yes, we will provide a tracking number once your order has shipped. You can use this tracking number to check the status of your order online."
    },
    {
      question: "Do you offer installation or assembly services?",
      answer: "We do not offer installation or assembly services at this time. However, many of our products come with detailed instructions and can be easily assembled by the customer."
    },
    {
      question: "Do you offer international shipping?",
      answer: "We currently only ship within South Africa. We apologize for any inconvenience."
    }
  ];

}
