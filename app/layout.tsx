import { Work_Sans } from "next/font/google";

import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

import Room from "./Room";

export const metadata = {
  title: "Art Nest",
  description:
    "Art Nest is a versatile design canvas that empowers you to bring your creative ideas to life effortlessly. Similar to Figma, Art Nest offers a user-friendly interface and powerful design tools to streamline your workflow. Whether you're sketching wireframes, crafting intricate UI designs, or collaborating with team members in real-time, Art Nest provides the flexibility and functionality you need to create stunning visuals. Simply dive in, let your imagination flow, and transform your concepts into reality with Art Nest.",
};

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <body className={`${workSans.className} bg-primary-grey-200`}>
      <Room>
        <TooltipProvider>{children}</TooltipProvider>
      </Room>
    </body>
  </html>
);

export default RootLayout;
