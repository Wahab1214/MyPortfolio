export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  techStack: string[];
  accent: string;
  glowClass: string;
  gradient: string;
  videoUrl: string;
  links: { label: string; url: string; icon: string }[];
  features: string[];
}

export const projects: Project[] = [
  {
    id: 'frova',
    name: 'Frova',
    tagline: 'Hands-free AI voice assistant for Android',
    description:
      'A hands-free AI voice assistant built with Kotlin/Jetpack Compose and a Python FastAPI backend, featuring wake-word detection, real-time STT/TTS pipeline, and deep Android Accessibility integration for full hands-free control.',
    longDescription:
      'Frova is designed for users with physical limitations who need a fully hands-free mobile experience. It uses a custom wake-word detection model, streams speech to a FastAPI backend for real-time speech-to-text, processes intent through an AI pipeline, and responds with synthesized speech — all without touching the screen. Deep Android Accessibility Service integration allows Frova to navigate other apps, click buttons, and read screen content on the user\'s behalf.',
    techStack: ['Kotlin', 'Jetpack Compose', 'Python', 'FastAPI', 'STT/TTS', 'Accessibility API'],
    accent: 'neon-blue',
    glowClass: 'glow-blue',
    gradient: 'from-neon-blue via-cyan-400 to-neon-teal',
    videoUrl: '',
    links: [
      { label: 'Play Store', url: '#', icon: 'play' },
      { label: 'GitHub', url: '#', icon: 'github' },
    ],
    features: [
      'Wake-word detection with on-device model',
      'Real-time STT streaming via WebSocket',
      'TTS response with natural voice synthesis',
      'Android Accessibility Service for app navigation',
      'Fully hands-free — zero screen interaction needed',
    ],
  },
  {
    id: 'kaam-dhanda',
    name: 'Kaam Dhanda',
    tagline: 'Hyperlocal daily-wage worker connector',
    description:
      'A hyperlocal daily-wage worker connector app built in Flutter that connects local blue-collar workers with people who need quick help nearby. Monetized via AdMob.',
    longDescription:
      'Kaam Dhanda bridges the gap between local blue-collar workers (electricians, plumbers, carpenters, daily-wage laborers) and people in the neighborhood who need their services right now. Workers create quick profiles showcasing their trade, location, and availability. Customers post jobs, browse nearby workers on a map, and connect instantly. The app is monetized through AdMob and designed for low-bandwidth mobile conditions common in Pakistan.',
    techStack: ['Flutter', 'Dart', 'Firebase', 'AdMob', 'GeoLocation', 'Maps SDK'],
    accent: 'neon-teal',
    glowClass: 'glow-teal',
    gradient: 'from-neon-teal via-emerald-400 to-cyan-400',
    videoUrl: '',
    links: [
      { label: 'Play Store', url: '#', icon: 'play' },
      { label: 'GitHub', url: '#', icon: 'github' },
    ],
    features: [
      'Location-based worker discovery on an interactive map',
      'Instant job posting and real-time matching',
      'Worker profiles with trade, rating, and availability',
      'AdMob monetization with non-intrusive placement',
      'Optimized for low-bandwidth mobile networks',
    ],
  },
  {
    id: 'soulframe',
    name: 'Soulframe',
    tagline: 'Bring any photo to life with AI voice conversation',
    description:
      'A groundbreaking AI app that brings a photo to life. Give it a person\'s photo and voice sample, and have a real-time voice conversation with that photo — it "sees" through the image and replies in the actual voice of the person, powered by AI.',
    longDescription:
      'Soulframe is a first-of-its-kind AI experience. Upload a photograph of a person and a short voice sample. Soulframe creates a real-time conversational avatar: it analyzes the photo to understand context, generates natural responses, and speaks in a voice cloned from the sample. You can have a flowing voice conversation where the photo "sees" what you show it and responds as that person. It blurs the line between memory and presence.',
    techStack: ['Flutter', 'Dart', 'Python', 'FastAPI', 'Voice Cloning', 'Vision AI', 'Real-time Audio'],
    accent: 'neon-purple',
    glowClass: 'glow-purple',
    gradient: 'from-neon-purple via-violet-400 to-fuchsia-400',
    videoUrl: '',
    links: [
      { label: 'Play Store', url: '#', icon: 'play' },
      { label: 'GitHub', url: '#', icon: 'github' },
    ],
    features: [
      'Photo analysis with vision AI for contextual awareness',
      'Voice cloning from a short audio sample',
      'Real-time bidirectional voice conversation',
      'Image-aware responses — it "sees" what the camera shows',
      'Low-latency streaming audio pipeline',
    ],
  },
];

export interface Skill {
  name: string;
  icon: string;
  color: string;
  category: string;
}

export const skills: Skill[] = [
  { name: 'Flutter', icon: 'flutter', color: '#02569B', category: 'Mobile' },
  { name: 'Dart', icon: 'dart', color: '#0175C2', category: 'Mobile' },
  { name: 'FastAPI', icon: 'fastapi', color: '#009688', category: 'Backend' },
  { name: 'Python', icon: 'python', color: '#3776AB', category: 'Backend' },
  { name: 'Firebase', icon: 'firebase', color: '#FFCA28', category: 'Backend' },
  { name: 'AI/ML', icon: 'ai', color: '#00D4FF', category: 'AI' },
  { name: 'Play Store', icon: 'play', color: '#34A853', category: 'DevOps' },
];

export const aboutBio = {
  short: 'Computer Science graduate based in Pakistan, building AI-powered mobile experiences with Flutter, Kotlin, and Python/FastAPI backends.',
  long: 'I\'m a Computer Science graduate from Pakistan with a passion for building intelligent, human-centered mobile applications. My work sits at the intersection of beautiful Flutter UI, robust Kotlin-native Android, and AI-powered Python/FastAPI backends. I believe the best apps don\'t just solve problems — they anticipate them. From hands-free voice assistants to AI that brings photos to life, I build experiences that feel like they\'re from the future.',
};

export const contactLinks: {
  label: string;
  value: string;
  url: string;
  icon: string;
  disabled?: boolean;
}[] = [
  { label: 'Email', value: 'codewithwahab26@gmail.com', url: 'mailto:codewithwahab26@gmail.com', icon: 'mail' },
  { label: 'GitHub', value: 'github.com/wahab', url: 'https://github.com', icon: 'github' },
  { label: 'LinkedIn', value: 'linkedin.com/in/wahab', url: 'https://linkedin.com', icon: 'linkedin' },
  { label: 'Play Store', value: 'Coming Soon on Play Store', url: '#', icon: 'play', disabled: true },
];

export const whatsappUrl = 'https://wa.me/923006181406?text=Hi%2C%20I%20saw%20your%20portfolio!';
