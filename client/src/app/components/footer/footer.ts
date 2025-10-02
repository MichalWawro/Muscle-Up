import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer implements OnInit {
  hint: string = "";
  hints: string[] = [
    "An average adult should drink 2.5 litres of water daily. How much did u drink today?",
    "Proteins are great for building muscles, but they also support you skin, hair, bones, and much more.",
    "Vitamin D, B12 and Iron are the holy trinity of supplementing.",
    "Working out sure feels great, but don't forget to rest - recovery is a part of progress.",
    "There are over 650 muscles in the body of an average human - each one with a job to do!",
    "A calorie deficit is key to weight loss. Do you know your ideal intake?",
    "Sleep isn't a luxury — it's your body's best recovery tool.",
    "Mental health is health too. Take time to breathe, reflect, and recharge.",
    "Stretching improves flexibility and reduces injury risk. Even 5 minutes helps!",
    "Healthy habits aren't built overnight. Start small, stay consistent.",
    "Posture matters — slouching can affect breathing, digestion, and even mood.",
    "Your heart beats about 100,000 times a day. Show it some love!"
  ];

  ngOnInit(): void {
    this.getRandomHint();
  }

  getRandomHint() {
    this.hint = this.hints[Math.floor(Math.random() * this.hints.length)];
  }

  handleHintClick(icon: HTMLElement): void {
    icon.classList.add('pop');
    this.getRandomHint();

    setTimeout(() => {
      icon.classList.remove('pop');
    }, 200);
  }
}
