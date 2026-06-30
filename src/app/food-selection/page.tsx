'use client';

import { motion } from 'framer-motion';
import { AppShell } from '@/components/layout/AppShell';
import { FoodCard } from '@/components/ui/FoodCard';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { useSelection } from '@/components/selection/SelectionProvider';

const foods = [
  { title: 'Pizza', description: 'Golden crust, melty comfort, and a crowd-pleasing favorite.' },
  { title: 'Burger', description: 'Bold, juicy, and full of satisfying character.' },
  { title: 'Pasta', description: 'Silky and rich, made for a cozy evening.' },
  { title: 'Sushi', description: 'Fresh, elegant, and beautifully balanced.' },
  { title: 'Tacos', description: 'Bright, playful, and packed with flavor.' },
  { title: 'Ramen', description: 'Warm, comforting, and deeply satisfying.' },
];

export default function FoodSelectionPage() {
  const { food, setFood } = useSelection();

  return (
    <AppShell
      title="Choose the food"
      description="Pick a favorite to make the evening feel complete."
      currentStep={6}
      totalSteps={8}
      backHref="/select-time"
      nextHref="/final-question"
      nextLabel="Final question"
    >
      <div className="mx-auto flex min-h-[calc(100vh-18rem)] items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <GlassCard className="w-full max-w-6xl p-8 sm:p-10">
          <SectionTitle
            eyebrow="Choose the food"
            title="Pick a favorite to make the evening feel complete."
            description="Each card is designed to feel playful and indulgent, with the selected one gently growing in presence."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {foods.map((option) => {
              const selected = food === option.title;
              return (
                <motion.button
                  key={option.title}
                  type="button"
                  onClick={() => setFood(option.title)}
                  whileHover={{ y: -5, scale: selected ? 1.02 : 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className={`rounded-[24px] border p-5 text-left transition-all duration-300 ${
                    selected
                      ? 'border-[color:var(--accent)] bg-[rgba(255,239,244,0.96)] shadow-luxe ring-1 ring-[rgba(255,143,177,0.25)]'
                      : 'border-[color:var(--border)] bg-white/80 hover:border-[color:var(--accent)] hover:shadow-soft'
                  }`}
                >
                  <FoodCard
                    title={option.title}
                    description={option.description}
                    selected={selected}
                    tag={option.title}
                    className="border-0 bg-transparent p-0 shadow-none"
                  />
                </motion.button>
              );
            })}
          </div>
        </GlassCard>
      </div>
    </AppShell>
  );
}
