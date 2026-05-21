import admettaLogo from "../assets/images/admetta-logo.svg";
import aboutStudio from "../assets/images/about-studio.svg";
import team1 from "../assets/images/team-1.svg";
import team2 from "../assets/images/team-2.svg";
import team3 from "../assets/images/team-3.svg";
import team4 from "../assets/images/team-4.svg";
import workBranding from "../assets/images/work-branding.svg";
import workCampaign from "../assets/images/work-campaign.svg";
import workGrid from "../assets/images/work-grid.svg";
import workGrowth from "../assets/images/work-growth.svg";
import workInterface from "../assets/images/work-interface.svg";
import workLaunch from "../assets/images/work-launch.svg";
import workLuxe from "../assets/images/work-luxe.svg";
import workPack from "../assets/images/work-pack.svg";
import workReel from "../assets/images/work-reel.svg";
import workShop from "../assets/images/work-shop.svg";
import workSocial from "../assets/images/work-social.svg";
import workWeb from "../assets/images/work-web.svg";

export const whatsappUrl = "https://wa.me/91XXXXXXXXXX";
export const email = "Infoadmetta@gmail.com";

export const images = {
  logo: admettaLogo,
  aboutStudio,
  team: [team1, team2, team3, team4],
  projects: {
    "work-branding.svg": workBranding,
    "work-campaign.svg": workCampaign,
    "work-grid.svg": workGrid,
    "work-growth.svg": workGrowth,
    "work-interface.svg": workInterface,
    "work-launch.svg": workLaunch,
    "work-luxe.svg": workLuxe,
    "work-pack.svg": workPack,
    "work-reel.svg": workReel,
    "work-shop.svg": workShop,
    "work-social.svg": workSocial,
    "work-web.svg": workWeb
  }
};

export const img = (name) => {
  if (name === "admetta-logo.svg") return images.logo;
  if (name === "about-studio.svg") return images.aboutStudio;
  if (name.startsWith("team-")) {
    const idx = parseInt(name.replace("team-", "").replace(".svg", ""), 10) - 1;
    return images.team[idx];
  }
  return images.projects[name] || "";
};

export const services = [
  ["Brand Identity & Logo Design", "We define the strategic and visual core of your brand, from positioning to logo systems and launch-ready design assets that feel premium across every touchpoint.", ["Logo suite and usage rules", "Color, typography, and visual system", "Brand guidelines and templates"], "◆"],
  ["Digital Marketing Strategy", "We map the right channels, content themes, offers, and campaign flow so your marketing activity works as one connected growth system.", ["Channel and audience strategy", "Campaign roadmap", "Performance measurement plan"], "◈"],
  ["Social Media Management", "We handle the rhythm of your social presence with sharp creative, consistent scheduling, community direction, and monthly insight reporting.", ["Monthly content calendars", "Post, reel, and story creative", "Publishing and reporting"], "◌"],
  ["Content Creation & Video", "We create visual content that gives your brand a distinct voice, including campaign visuals, short-form video, copywriting, and launch assets.", ["Video concepts and scripts", "Motion-ready campaign assets", "Copywriting and creative direction"], "▣"],
  ["Website Design & Development", "We design and build responsive websites that turn brand strategy into a polished digital experience, optimized for clarity, conversion, and trust.", ["UX structure and page design", "Responsive frontend build", "SEO-ready page foundations"], "▰"],
  ["Advertising Campaigns", "We craft campaign ideas and execution systems for launches, offers, and awareness pushes across digital and traditional placements.", ["Campaign concept and messaging", "Ad creatives and variants", "Launch and optimization support"], "✦"],
  ["SEO & Online Presence", "We strengthen your discoverability with search-focused content, local presence essentials, and technical improvements that support organic growth.", ["Keyword and content planning", "On-page SEO improvements", "Local listing optimization"], "◎"],
  ["Personal Branding", "We help founders, experts, and public-facing leaders turn their point of view into a compelling personal brand and content platform.", ["Positioning and profile refresh", "Content pillars and formats", "Thought leadership assets"], "↗"]
];

export const projectsList = [
  ["Aurora Labs Identity", "Branding", "branding", "work-branding.svg"],
  ["Glow Room Social", "Social Media", "social", "work-social.svg"],
  ["Vertex Studio Web", "Web", "web", "work-web.svg"],
  ["Pulse Fest Launch", "Campaigns", "campaigns", "work-campaign.svg"],
  ["Maison Veda System", "Branding", "branding", "work-luxe.svg"],
  ["Novo Cafe Calendar", "Social Media", "social", "work-grid.svg"],
  ["ScaleUp Platform", "Web", "web", "work-interface.svg"],
  ["Metro Mode Ads", "Campaigns", "campaigns", "work-launch.svg"],
  ["Ritual Co Packaging", "Branding", "branding", "work-pack.svg"],
  ["Craftline Reels", "Social Media", "social", "work-reel.svg"],
  ["Bloom Cart Store", "Web", "web", "work-shop.svg"],
  ["Finora Growth Push", "Campaigns", "campaigns", "work-growth.svg"]
];
