import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { placeholderImage } from '@/lib/images'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Behind the Scenes: A Day in Ranch Life - Happyland Ranch Meat Co.',
  description: 'Follow along as we take you through a typical day caring for our animals and maintaining our oak savanna at Happyland Ranch.',
  keywords: ['ranch life', 'cattle ranching', 'daily ranch work', 'animal care', 'sustainable farming']
})

const blogPost = {
  title: 'Behind the Scenes: A Day in Ranch Life',
  excerpt: 'Follow along as we take you through a typical day caring for our animals and maintaining our oak savanna.',
  image: placeholderImage('Rancher on horseback checking cattle at golden hour', 800, 500),
  date: '2024-01-05',
  category: 'Ranch Life',
  readTime: '4 min read',
  author: 'Jake Thompson, Ranch Manager'
}

const dailySchedule = [
  {
    time: '5:30 AM',
    activity: 'Morning Check',
    description: 'First light means first check of all the animals. We walk or ride through each paddock, counting heads and looking for any signs of illness or injury.'
  },
  {
    time: '6:30 AM',
    activity: 'Water Systems',
    description: 'Check all water tanks, troughs, and automatic waterers. Clean water is essential for healthy animals and good meat quality.'
  },
  {
    time: '8:00 AM',
    activity: 'Pasture Rotation',
    description: 'Move cattle to fresh paddocks as needed. This might involve setting up temporary fencing or opening gates to new grazing areas.'
  },
  {
    time: '10:00 AM',
    activity: 'Equipment Maintenance',
    description: 'Ranch equipment works hard. Daily maintenance keeps tractors, mowers, and other tools running when we need them most.'
  },
  {
    time: '12:00 PM',
    activity: 'Lunch & Planning',
    description: 'A quick lunch and time to plan the afternoon work based on weather, animal needs, and seasonal priorities.'
  },
  {
    time: '1:30 PM',
    activity: 'Land Management',
    description: 'Brush clearing, fence repair, habitat improvement, or seeding native plants depending on the season and current projects.'
  },
  {
    time: '4:00 PM',
    activity: 'Animal Health',
    description: 'Individual animal care, vaccinations, hoof trimming, or working with the veterinarian on health protocols.'
  },
  {
    time: '6:00 PM',
    activity: 'Evening Check',
    description: 'Final check of all animals before dark. Count heads, ensure gates are secure, and prepare for the night.'
  }
]

export default function RanchLifeBehindScenesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src={blogPost.image.src}
          alt={blogPost.image.alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <div className="inline-flex items-center gap-2 bg-accent-clay text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span>{blogPost.category}</span>
              <span>•</span>
              <span>{blogPost.readTime}</span>
            </div>
            <h1 className="heading-1 mb-4">{blogPost.title}</h1>
            <p className="body-large text-brand-cream">
              {blogPost.excerpt}
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-brand-cream">
              <span>By {blogPost.author}</span>
              <span>•</span>
              <span>{new Date(blogPost.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="section-padding">
        <div className="container-custom max-w-4xl">
          <article className="prose prose-lg max-w-none">
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              People often ask what a typical day looks like on a working ranch. The truth is, 
              no two days are exactly the same—weather, seasons, and the needs of our animals 
              dictate the rhythm of ranch life. But there are constants: early mornings, 
              honest work, and the deep satisfaction that comes from caring for the land and animals.
            </p>

            <h2 className="heading-3 text-brand-forest mb-6">Before the Sun Rises</h2>
            
            <p className="text-gray-700 mb-6">
              My day starts before 5:30 AM, often while it's still dark. There's something 
              peaceful about those quiet moments before the world wakes up—just me, a cup of 
              coffee, and the anticipation of what the day will bring. The first priority is 
              always checking on our animals.
            </p>

            <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
              <Image
                src={placeholderImage('Early morning mist over cattle in pasture', 800, 450).src}
                alt="Early morning on the ranch"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <blockquote className="border-l-4 border-accent-clay pl-6 italic text-xl text-gray-600 my-8">
              "Cattle are creatures of habit. When you know your herd, you can spot problems 
              before they become serious. It's about reading their behavior, their body language, 
              and understanding what normal looks like for each group."
            </blockquote>

            <h2 className="heading-3 text-brand-forest mb-6">A Day in the Life</h2>
            
            <p className="text-gray-700 mb-8">
              Here's what a typical spring day might look like on Happyland Ranch:
            </p>

            <div className="space-y-6 mb-12">
              {dailySchedule.map((item, index) => (
                <div key={index} className="flex gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-20 text-center">
                      <div className="text-lg font-bold text-brand-forest">{item.time}</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-brand-forest mb-2">{item.activity}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="heading-3 text-brand-forest mb-6">Seasonal Variations</h2>
            
            <p className="text-gray-700 mb-6">
              Of course, ranch work changes dramatically with the seasons. Spring brings calving 
              season—one of the most demanding but rewarding times of the year. We check expecting 
              mothers multiple times throughout the day and night.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">🌱 Spring Tasks</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• Calving season monitoring</li>
                  <li>• Pasture preparation and seeding</li>
                  <li>• Fence repair after winter</li>
                  <li>• Equipment servicing</li>
                  <li>• Vaccination schedules</li>
                </ul>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-yellow-800 mb-4">☀️ Summer Tasks</h3>
                <ul className="space-y-2 text-yellow-700">
                  <li>• Intensive grazing management</li>
                  <li>• Hay making and storage</li>
                  <li>• Water system maintenance</li>
                  <li>• Brush and weed management</li>
                  <li>• Heat stress monitoring</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-800 mb-4">🍂 Fall Tasks</h3>
                <ul className="space-y-2 text-orange-700">
                  <li>• Weaning calves</li>
                  <li>• Breeding decisions</li>
                  <li>• Winter feed preparation</li>
                  <li>• Equipment winterization</li>
                  <li>• Pasture rest planning</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">❄️ Winter Tasks</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• Daily feeding routines</li>
                  <li>• Ice breaking on water sources</li>
                  <li>• Shelter and windbreak maintenance</li>
                  <li>• Planning for next year</li>
                  <li>• Equipment repair and maintenance</li>
                </ul>
              </div>
            </div>

            <h2 className="heading-3 text-brand-forest mb-6">The Unexpected Moments</h2>
            
            <p className="text-gray-700 mb-6">
              Ranch life is full of surprises. Just last week, we had a cow go into labor during 
              a thunderstorm. There's nothing quite like helping bring new life into the world 
              while lightning flashes overhead and rain soaks through your jacket. But when that 
              calf took its first breath and stood up on wobbly legs, every uncomfortable moment 
              was worth it.
            </p>

            <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
              <Image
                src={placeholderImage('Newborn calf with mother in green pasture', 800, 450).src}
                alt="Newborn calf with mother"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <p className="text-gray-700 mb-6">
              Then there are the equipment breakdowns that always seem to happen at the worst 
              possible moment, the escaped cattle that decide the neighbor's corn field looks 
              more appealing than their own pasture, and the wildlife encounters that remind 
              you that you're sharing this land with creatures who were here long before you.
            </p>

            <h2 className="heading-3 text-brand-forest mb-6">Why We Do It</h2>
            
            <p className="text-gray-700 mb-6">
              Ranch work is physically demanding, mentally challenging, and never really ends. 
              So why do we choose this life? It's because every day, we're part of something 
              bigger than ourselves. We're stewards of the land, caretakers of animals, and 
              providers of food for families.
            </p>

            <p className="text-gray-700 mb-6">
              There's deep satisfaction in watching a pasture recover from overgrazing, in 
              seeing a sick animal return to health, in knowing that the beef we produce is 
              raised with integrity and care. It's about being connected to the land and the 
              cycles of nature in a way that few people experience anymore.
            </p>

            <div className="bg-brand-forest text-white rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold mb-4">Ranch Life by the Numbers</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent-clay mb-2">365</div>
                  <div className="text-sm text-brand-cream">Days a year we're on duty</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-clay mb-2">12+</div>
                  <div className="text-sm text-brand-cream">Hours of work on busy days</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-clay mb-2">200+</div>
                  <div className="text-sm text-brand-cream">Head of cattle in our care</div>
                </div>
              </div>
            </div>

            <h2 className="heading-3 text-brand-forest mb-6">The Reward</h2>
            
            <p className="text-gray-700 mb-6">
              At the end of a long day, when the sun is setting over the oak savanna and the 
              cattle are settled for the night, there's a moment of perfect peace. The work 
              is hard, but it's honest work. The hours are long, but they're spent in one 
              of the most beautiful places on earth.
            </p>

            <p className="text-gray-700 mb-8">
              And when customers tell us they can taste the difference in our beef, when they 
              say it's the best they've ever had, we know that every early morning, every 
              late night, and every challenging day has been worth it. Because we're not just 
              raising cattle—we're raising the bar for what beef should be.
            </p>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-brand-forest mb-4">Experience Our Ranch</h3>
              <p className="text-gray-700 mb-6">
                Want to see ranch life up close? We offer ranch tours during certain times 
                of the year where you can meet our animals and see our operation firsthand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-brand-forest text-white hover:bg-opacity-90 focus:ring-brand-forest h-12 px-8 text-base"
                >
                  Schedule a Ranch Tour
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-transparent text-brand-forest border-2 border-brand-forest hover:bg-brand-forest hover:text-white focus:ring-brand-forest h-12 px-8 text-base"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>

          </article>
        </div>
      </div>
    </div>
  )
}
