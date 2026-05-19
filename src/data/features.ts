import inbox from "../assets/inbox.jpg";
import stories from "../assets/stories.jpg";
import chat from "../assets/chat.jpg";

type Feature = {
  icon: string;
  title: string;
  desc: string;
  screen: string;
  label: string;
};

const features: Feature[] = [
  {
    icon: "💬",
    title: "Real-time Messaging",
    desc: "Instant delivery with read receipts, typing indicators, and multi-device sync.",
    screen: inbox,
    label: "Inbox",
  },
  {
    icon: "📖",
    title: "Vibrant Stories",
    desc: "Share photo and video stories that disappear in 24h.",
    screen: stories,
    label: "Stories",
  },
  {
    icon: "🔒",
    title: "Private Conversations",
    desc: "End-to-end encrypted chats with reactions and HD calls.",
    screen: chat,
    label: "Chat",
  },
];

export default features;
