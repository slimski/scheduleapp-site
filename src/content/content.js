import { DeviceUserIcon, DeviceNotificationIcon, DeviceTouchIcon } from '@/components/PrimaryFeatures'

export const siteContent = {
  appStoreUrl: '#!!', // TODO: Update this with the app store URL
  // These go at the top of the page
  navLinks: [
    ['Features', '/#features'],
    // ['FAQs', '#faqs'],
  ],
  // That's the rotating feature list on the home page
  features: [
    {
      name: 'Never miss a single match!',
      description:
        'The app\'s home screen displays the date, time, and location of the next upcoming game for your team, ensuring that you are always ready and able to tune in.',
      icon: DeviceUserIcon,
    },
    {
      name: 'Check progress throughout the season',
      description:
        'Don\'t Miss Next Match also displays the score of the team\'s last game, so you can keep track of their progress throughout the season.',
      icon: DeviceNotificationIcon,
    },
    {
      name: 'Privacy as default',
      description:
        'Enjoy peace of mind knowing that your privacy is being respected - Don\'t Miss Next Match does not collect any personal information or track your activity.',
      icon: DeviceTouchIcon,
    }
  ],
  // Not used, but that's how you'd add an FAQ section
  faqs: [
    [
      {
        question: 'How do I know the tips are good?',
        answer:
          'Our whole business depends on our tips being good, so it’s in our best interest that they are. The results of our customers speak for themselves, just trust us.',
      },
      {
        question: 'Isn’t this insider trading?',
        answer:
          'Yes exactly. But at scale! Historically you could only make insider trades with knowledge from your direct network. Pocket brings you insider trading tips from people you don’t even know.',
      },
      {
        question: 'But isn’t insider trading illegal?',
        answer:
          'Here’s the thing: you’re the one doing the insider trading, not us. We’re just giving you the tips and some tools to make trades. We’re not doing anything wrong here.',
      },
    ],
    [
      {
        question: 'Do the people giving you tips realize what they are doing?',
        answer:
          'Again I would argue this isn’t really our responsibility. People make their own choices. If they don’t research the consequences that’s on them, not on us.',
      },
      {
        question: 'Where is Pocket based?',
        answer:
          'Let’s just say it’s not somewhere where the SEC is going to find us.',
      },
      {
        question: 'Is there any age limit to trading on Pocket?',
        answer:
          'For our free plan, the age limit is based on the minimum age to trade in your country of residence. Our VIP plan uses advanced transaction anonymization though, so you can use that plan even if you’re 9 years old. Or a dog.',
      },
    ],
    [
      {
        question: 'How did you get this on the App Store?',
        answer:
          'Honestly we were surprised too, but eventually we found out that the app reviewer found the app so compelling they approved it just so they could use it themselves.',
      },
      {
        question: 'How do I explain the money I withdraw from Pocket to the IRS?',
        answer:
          'This feels like one-hundred percent a you problem. Pocket is not responsible in any way for your tax returns.',
      },
      {
        question: 'How do I become an insider?',
        answer:
          'Contact us with some details about your industry and the type of access you have to apply for an insider account. Once approved, we’ll send you a guide on collecting insider information without being detected at work.',
      },
    ],
]
}
