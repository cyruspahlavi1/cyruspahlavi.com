import { Quote, Leaf, Users, GraduationCap, Handshake, Building, Shield } from 'lucide-react';

const priorities = [
  {
    icon: Leaf,
    title: 'Championing Sustainability to Protect Our Planet',
    description: 'HRH Cyrus Pahlavi believes that in a rapidly shifting world, it is our duty to think generations ahead and to have the courage to take bold steps. Addressing complex challenges such as climate change, water scarcity, and environmental degradation requires innovative partnerships and pragmatic solutions.',
    quote: 'Sustainability is a fundamental component of our approach and endeavours to promote climate action, foster international cooperation, and seek practical solutions to the challenges facing our planet.',
  },
  {
    icon: Users,
    title: 'Strengthening Peaceful Coexistence for a Stable Future',
    description: 'Diversity built our communities, and HRH Cyrus Pahlavi\'s unwavering commitment to inclusivity will continue to shape the future. Nurturing constructive relationships within and beyond borders is paramount to ensuring growth and stability. We stand shoulder to shoulder with those seeking to build a better world and celebrate what unites us in the spirit of tolerance, peace, and stability.',
    quote: 'We extend the hand of friendship to all who share our values of peaceful coexistence and mutual respect to achieve progress and prosperity.',
  },
  {
    icon: GraduationCap,
    title: 'Advancing Education as the Foundation of Development',
    description: 'Supporting and empowering all members of society is essential when building a globally connected and thriving community, and that empowerment begins with a quality education and opportunities for all. HRH invests in the leaders of tomorrow with a focus on high-quality education and initiatives that underpin strong traditions, character, and resilience.',
    quote: 'We are blessed with many resources, especially our highly skilled human capital—people come first, because for a community to prosper, so too must its people.',
  },
  {
    icon: Handshake,
    title: 'Reinforcing International Cooperation to Foster Enduring Peace',
    description: 'In pursuit of the shared goals of international peace, stability, and development, HRH Cyrus Pahlavi believes in the importance of building and nurturing constructive partnerships with other nations to help create a more harmonious and sustainable world.',
    quote: 'We continue to build bridges of partnership and cooperation, serve as a facilitator of diplomatic dialogue, and actively support international efforts aimed at promoting peace and prosperity.',
  },
  {
    icon: Building,
    title: 'Driving Economic Prosperity and Resilience',
    description: 'Consistent with the longstanding ambition to develop an increasingly resilient, dynamic, and knowledge-based economy, HRH continues to invest in people and knowledge as the most powerful drivers of economic development and diversification. This includes partnering with nations and stakeholders around the world to facilitate trade and investment, promote sustainable growth, and develop infrastructure that enables individuals and economies to thrive.',
    quote: 'Further diversifying our economy is a key strategic focus of our future plans. It is therefore necessary to accelerate economic development efforts to continue building a leading global presence.',
  },
  {
    icon: Shield,
    title: 'Affirming Identity and Shared Belonging',
    description: 'Emerging from humble beginnings, rapid transformation was the result of the grit, hard work, and determination of our ancestors to build a better future for all. In championing present and open leadership, HRH believes that future progress relies on our collective vision and commitment, and that every individual can uniquely contribute towards writing the next chapter.',
    quote: 'We are fortunate to have people who have proven their spirit and determination to overcome the toughest challenges. Our pride in our people is infinite.',
  },
];

export default function StrategicPrioritiesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-black py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
              Strategic Priorities
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              Improving quality of life for humanity and envisioning a better world for all
            </h1>
            <p className="mt-8 text-lg text-neutral-400">
              The philosophy and beliefs that underpin HRH Cyrus Pahlavi's leadership are a guiding light for the present and future. From investing in education and accelerating economic diversification to advancing human fraternity and environmental sustainability, these strategic priorities reflect a lifelong commitment to serving people and contributing to global stability.
            </p>
          </div>
        </div>
      </section>

      {/* Priorities */}
      <section className="bg-neutral-950">
        {priorities.map((priority, index) => (
          <div key={priority.title} className="border-t border-white/10 py-24">
            <div className="container">
              <div className={`grid gap-16 lg:grid-cols-2 lg:items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <priority.icon className="h-12 w-12 text-gold" />
                  <h2 className="mt-8 font-serif text-3xl leading-tight text-white md:text-4xl">
                    {priority.title}
                  </h2>
                  <p className="mt-8 text-lg text-neutral-400">
                    {priority.description}
                  </p>
                </div>
                <div className={`rounded-xl border border-white/10 bg-black p-10 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Quote className="h-8 w-8 text-gold/40" />
                  <p className="mt-6 font-serif text-xl italic leading-relaxed text-white">
                    &ldquo;{priority.quote}&rdquo;
                  </p>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-gold">
                    HRH Cyrus Pahlavi
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
