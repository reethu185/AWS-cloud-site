import { motion } from "framer-motion";
import { Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-off/10 bg-[#0B1323]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl px-4 py-8"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left - Brand */}
          <div className="text-sm text-off/70">
            © {new Date().getFullYear()} VVCE AWS Club
          </div>

          {/* Center - Navigation */}
          <div className="flex items-center gap-6 text-sm text-off/60">
            <a href="#about" className="hover:text-off transition">
              About
            </a>
            <a href="#events" className="hover:text-off transition">
              Events
            </a>
            <a href="#projects" className="hover:text-off transition">
              Projects
            </a>
            <a href="#team" className="hover:text-off transition">
              Team
            </a>
            <a href="#join" className="hover:text-off transition">
              Join
            </a>
          </div>

          {/* Right - Social Icons */}
          <div className="flex items-center gap-4">
            
            <a
              href="https://chat.whatsapp.com/GiyK49su1Nb5Q1Q9GoKc91"
              target="_blank"
              rel="noreferrer"
              className="group h-9 w-9 flex items-center justify-center rounded-xl
                         border border-off/10 bg-off/5
                         transition-all duration-300
                         hover:border-aws/40 hover:bg-aws/10"
            >
              <MessageCircle
                size={18}
                className="text-off/70 group-hover:text-aws transition"
              />
            </a>

            <a
              href="https://www.instagram.com/reel/DU3EhlykhlH/?igsh=MW56c3V0cjk0dHM1NA=="
              target="_blank"
              rel="noreferrer"
              className="group h-9 w-9 flex items-center justify-center rounded-xl
                         border border-off/10 bg-off/5
                         transition-all duration-300
                         hover:border-aws/40 hover:bg-aws/10"
            >
              <Instagram
                size={18}
                className="text-off/70 group-hover:text-aws transition"
              />
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}