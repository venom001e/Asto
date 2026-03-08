/**
 * ✨ Dynamic Horoscope Engine — Astro Cloud
 * Generates daily predictions based on current date
 * Each day produces unique horoscope readings for all 12 signs
 */

const HoroscopeEngine = (function () {

    // ─── Zodiac Sign Data ─────────────────────────────────────────
    const zodiacSigns = {
        aries: {
            name: "Aries", symbol: "♈", element: "Fire", ruler: "Mars",
            date: "Mar 21 - Apr 20", icon: "h1.svg",
            traits: ["Courageous", "Energetic", "Optimistic", "Passionate"],
            predictions: {
                love: [
                    "Today brings passionate energy to your love life. A meaningful conversation will deepen your connection with your partner.",
                    "Romance is in the air! Single Aries may meet someone special through an unexpected encounter today.",
                    "Your fiery nature draws admirers. Express your feelings openly — vulnerability is your strength today.",
                    "A past misunderstanding clears up, bringing renewed warmth to your relationship. Trust the process.",
                    "Someone close to you needs reassurance. Your words of affirmation can transform their entire day.",
                    "Today favors bold romantic gestures. Don't hold back from expressing what's truly in your heart.",
                    "Your magnetic personality shines bright. Social gatherings may lead to meaningful romantic connections."
                ],
                career: [
                    "A new opportunity aligns with your professional goals. Trust your instincts when making decisions today.",
                    "Your leadership qualities shine today. Colleagues look to you for guidance on an important project.",
                    "Financial gains are on the horizon. An investment or business idea you've been considering shows promise.",
                    "Creativity flows freely in your work today. Use this energy to tackle problems with innovative solutions.",
                    "A mentor figure offers valuable advice. Listen carefully — their wisdom could accelerate your career path.",
                    "Your determination pays off as a long-pending project finally shows results. Celebrate this milestone.",
                    "Networking brings unexpected opportunities. A casual conversation could lead to a major career breakthrough."
                ],
                health: [
                    "Channel your abundant energy into physical activity. A morning workout sets the perfect tone for today.",
                    "Pay attention to your diet today. Nourishing foods will boost your energy and mental clarity significantly.",
                    "Stress relief is important today. Try meditation or deep breathing exercises to restore inner balance.",
                    "Your vitality is high today — perfect time to start that fitness routine you've been putting off.",
                    "Rest is just as important as action. Allow your body time to recover and rejuvenate today.",
                    "Outdoor activities bring both physical and mental wellness. A walk in nature can recharge your spirit.",
                    "Hydration is key today. Drink plenty of water and herbal teas to keep your energy levels optimal."
                ],
                general: [
                    "The stars favor bold action today. Step out of your comfort zone and embrace new possibilities.",
                    "Your natural enthusiasm inspires everyone around you. Use this positive energy to uplift others.",
                    "An unexpected discovery brings joy and excitement. Stay open to surprises that the universe has planned.",
                    "Today is perfect for setting new goals. Your determination and focus are at peak levels right now.",
                    "A long-desired wish is closer to manifesting. The universe conspires in your favor — keep believing.",
                    "Adventure calls! Whether physical or intellectual, explore something entirely new and exciting today.",
                    "Your courage and confidence attract good fortune. Trust in your abilities — you're stronger than you know."
                ]
            }
        },
        taurus: {
            name: "Taurus", symbol: "♉", element: "Earth", ruler: "Venus",
            date: "Apr 21 - May 21", icon: "h2.svg",
            traits: ["Reliable", "Patient", "Devoted", "Stable"],
            predictions: {
                love: [
                    "Stability and warmth define your love life today. Small gestures of affection mean the most.",
                    "Your loyal nature strengthens bonds. Express appreciation to your partner for their unwavering support.",
                    "Venus blesses your romantic endeavors. A romantic dinner or heartfelt gift will create lasting memories.",
                    "Trust your heart's wisdom today. The answer to a relationship question lies within your intuition.",
                    "A surprise from someone special brightens your day. Reciprocate with your signature warmth and generosity.",
                    "Patience in love pays off beautifully. A slow-burning connection evolves into something truly special.",
                    "Your sensual nature is heightened today. Create a beautiful, comfortable space for intimate connections."
                ],
                career: [
                    "Your practical approach to work impresses superiors. A promotion or raise may be in the cards.",
                    "Financial stability improves as careful planning bears fruit. Your patience in investing shows results.",
                    "A creative project gains momentum. Your eye for beauty and quality sets your work apart from others.",
                    "Teamwork thrives today. Your reliable nature makes you the cornerstone of collaborative efforts.",
                    "A business opportunity related to luxury, food, or aesthetics aligns perfectly with your talents.",
                    "Your persistence conquers a challenging work situation. Don't give up — breakthrough is just ahead.",
                    "Material rewards come your way. A bonus, gift, or unexpected income source brings financial comfort."
                ],
                health: [
                    "Indulge in self-care today. A spa treatment or relaxing bath can do wonders for your wellbeing.",
                    "Enjoy nutritious comfort foods that nourish both body and soul. Cooking at home brings peace.",
                    "Gentle exercises like yoga or walking suit your energy today. Don't push too hard — flow naturally.",
                    "Nature therapy is your best medicine. Spend time in a garden or park to restore inner harmony.",
                    "Your throat area needs attention. Warm drinks and vocal rest help maintain your physical comfort.",
                    "Sleep quality matters today. Create a peaceful bedtime routine for deeply restorative rest.",
                    "Earthy grounding exercises help balance your energy. Walk barefoot or practice deep breathing outdoors."
                ],
                general: [
                    "A day of abundance and comfort awaits. Enjoy the simple pleasures life has to offer you.",
                    "Your grounded nature helps others find stability. You're a calming presence in a chaotic world.",
                    "Material and spiritual blessings flow together. Balance enjoying luxury with inner growth today.",
                    "A creative pursuit brings unexpected satisfaction. Explore art, music, or design for pure enjoyment.",
                    "Your stubbornness serves you well today — don't compromise on things that truly matter to you.",
                    "Comfort and security are your priorities. Trust that the universe provides exactly what you need.",
                    "Beauty surrounds you in unexpected places. Open your eyes to the aesthetic wonders of everyday life."
                ]
            }
        },
        gemini: {
            name: "Gemini", symbol: "♊", element: "Air", ruler: "Mercury",
            date: "May 22 - Jun 21", icon: "h3.svg",
            traits: ["Versatile", "Curious", "Communicative", "Witty"],
            predictions: {
                love: [
                    "Communication is the key to love today. Share your thoughts freely with those who matter most.",
                    "Your quick wit and charm attract interesting people. A stimulating conversation could spark romance.",
                    "Variety keeps your love life exciting. Plan something new and adventurous with your partner.",
                    "Social media or text messages bring a pleasant surprise from someone who holds you dear.",
                    "Your dual nature finds balance in love. Both giving and receiving affection come naturally today.",
                    "Words of love carry extra power today. Write a letter, send a poem, or simply speak from the heart.",
                    "A friend could become something more. Pay attention to shifting dynamics in your social circle."
                ],
                career: [
                    "Your communication skills open new doors. A presentation or pitch goes exceptionally well today.",
                    "Multiple opportunities present themselves simultaneously. Your ability to multitask ensures success.",
                    "Networking is your superpower today. Connections made now will prove valuable in the coming months.",
                    "Writing, teaching, or media-related work flourishes. Your intellectual abilities are at their peak.",
                    "A short trip or online meeting connects you with influential people. Stay alert to opportunities.",
                    "Your adaptability helps navigate workplace changes smoothly. Others admire your flexibility and grace.",
                    "Ideas flow rapidly today. Document your thoughts — some of these concepts have real potential."
                ],
                health: [
                    "Mental stimulation is essential for your wellbeing. Engage in puzzles, reading, or learning something new.",
                    "Your nervous energy needs an outlet. Try activities that engage both mind and body simultaneously.",
                    "Breathwork and meditation calm your active mind. Even five minutes of stillness brings profound clarity.",
                    "Social connections boost your mental health. Spend time with friends who make you laugh and feel alive.",
                    "Your arms, shoulders, and lungs need attention. Gentle stretching and deep breathing exercises help.",
                    "Variety in your diet keeps things interesting. Try a new healthy recipe that excites your palate.",
                    "Information overload can cause stress. Take breaks from screens and enjoy quiet moments of reflection."
                ],
                general: [
                    "Your mind buzzes with brilliant ideas today. Capture them before they float away — write them down!",
                    "A day of meaningful conversations and connections. You'll learn something that changes your perspective.",
                    "Curiosity leads you to discover something fascinating. Follow that rabbit hole — it's worth exploring.",
                    "Your versatility is a gift. Embrace the many facets of your personality without trying to choose just one.",
                    "Travel plans or adventures may take shape. Whether near or far, a journey brings fresh inspiration.",
                    "Information you receive today carries hidden significance. Read between the lines and trust your intellect.",
                    "Your wit and humor brighten the world. Laughter is truly the best medicine — spread it generously."
                ]
            }
        },
        cancer: {
            name: "Cancer", symbol: "♋", element: "Water", ruler: "Moon",
            date: "Jun 22 - Jul 22", icon: "h4.svg",
            traits: ["Intuitive", "Nurturing", "Empathetic", "Protective"],
            predictions: {
                love: [
                    "Your nurturing energy creates a safe haven for love. Deep emotional connections strengthen today.",
                    "The Moon enhances your intuition in matters of the heart. Trust what your inner voice tells you.",
                    "Family bonds bring comfort and joy. A gathering at home creates precious memories to cherish.",
                    "Your emotional depth attracts a kindred soul. Someone understands you on a level that feels magical.",
                    "Past emotional wounds begin to heal today. Forgiveness and compassion open doors to new love.",
                    "A homemade surprise delights your loved one. Your caring nature is your most attractive quality.",
                    "Vulnerability is courage. Opening your heart despite past hurts leads to the love you truly deserve."
                ],
                career: [
                    "Your intuition guides smart business decisions. Trust your gut feelings about professional matters.",
                    "A project close to your heart gains recognition. Your emotional investment in work pays dividends.",
                    "Working from home or in familiar environments boosts productivity. Create a nurturing workspace.",
                    "Caring for others becomes a career asset. Roles in healthcare, counseling, or hospitality thrive.",
                    "Financial security improves through careful planning. Your conservative approach to money proves wise.",
                    "A female colleague or mentor offers support that accelerates your professional growth significantly.",
                    "Your empathy helps resolve a workplace conflict. Others value your ability to understand all sides."
                ],
                health: [
                    "Emotional health is just as important as physical health. Take time for activities that soothe your soul.",
                    "Water-based activities bring healing — swimming, baths, or simply drinking more water nurtures you.",
                    "Your stomach area may be sensitive today. Choose gentle, nourishing foods that comfort your system.",
                    "Moon energy affects your mood cycles. Be gentle with yourself during emotional ebbs and flows.",
                    "Home-based yoga or meditation brings more peace than any outside activity. Embrace your inner sanctuary.",
                    "Cooking and preparing meals is therapeutic for you. Nourish yourself with love-infused homemade food.",
                    "Sleep under soft lighting and calming scents. Your sensitive system responds beautifully to gentle environments."
                ],
                general: [
                    "Home and family take center stage today. Investing in your personal sanctuary brings lasting happiness.",
                    "Your psychic abilities are heightened. Pay attention to dreams, intuitions, and subtle signs around you.",
                    "A wave of nostalgia brings comfort. Revisiting cherished memories reminds you of how far you've come.",
                    "Your protective instincts serve those you love. Being their safe harbor is a beautiful form of strength.",
                    "Creative expression through art, writing, or music helps process your deep and complex emotions.",
                    "The Moon favors new beginnings in your personal life. Plant seeds of intention during tonight's energy.",
                    "Trust the ebb and flow of life. Like the tides guided by the Moon, everything happens in perfect timing."
                ]
            }
        },
        leo: {
            name: "Leo", symbol: "♌", element: "Fire", ruler: "Sun",
            date: "Jul 23 - Aug 21", icon: "h5.svg",
            traits: ["Confident", "Creative", "Generous", "Warm-hearted"],
            predictions: {
                love: [
                    "Your radiant energy attracts admirers. Let your natural charisma guide you in matters of the heart.",
                    "Grand romantic gestures are favored today. Surprise your partner with something truly spectacular.",
                    "Your generosity in love is rewarded with deep devotion. Give freely and receive abundantly.",
                    "A creative date idea makes unforgettable memories. Think theater, art galleries, or sunset adventures.",
                    "Your warmth melts even the coldest hearts. Someone who seemed distant begins opening up to you.",
                    "Self-love is paramount today. Treat yourself like royalty — you deserve every bit of pampering.",
                    "Passion ignites in your relationship. Express your desires confidently — your partner will appreciate it."
                ],
                career: [
                    "The spotlight finds you at work today. A presentation, performance, or leadership moment shines bright.",
                    "Creative projects receive applause and recognition. Your unique vision sets you apart from the crowd.",
                    "Leadership opportunities arise. Step into authority with confidence — you were born to lead.",
                    "Entertainment, arts, or children-related careers flourish. Your sunny disposition wins hearts and contracts.",
                    "A bold career move pays off handsomely. Trust your instinct to go big — fortune favors the brave Leo.",
                    "Your generosity to colleagues creates a loyal team. People want to work with and for a leader like you.",
                    "Recognition and awards may come your way. Your consistent excellence finally gets the spotlight it deserves."
                ],
                health: [
                    "Your vitality is at its peak. Channel this solar energy into activities that make your heart sing.",
                    "Heart health matters — both physical and emotional. Cardio exercise and emotional expression help.",
                    "Your back and spine need attention. Good posture and gentle stretching prevent discomfort today.",
                    "Sunshine is your medicine. Spend time outdoors soaking up vitamin D and natural energy.",
                    "Creative expression is therapeutic. Dance, paint, or perform — art heals your royal spirit.",
                    "Your energy is contagious. Group fitness or team sports amplify your motivation and results.",
                    "Pride shouldn't prevent you from asking for help. If something bothers you, consult a professional."
                ],
                general: [
                    "Today you shine brighter than ever. The universe recognizes your unique gifts — own your brilliance.",
                    "Creativity flows through every aspect of your day. Everything you touch turns to gold under Sun's blessing.",
                    "Children, playfulness, and fun bring unexpected joy. Let your inner child come out and play freely.",
                    "Your confidence inspires others to believe in themselves. Leadership isn't just authority — it's inspiration.",
                    "A celebration or festive occasion brings happiness. You're the life of every party — embrace it fully.",
                    "Luxury and quality are your birthright. Don't settle for less than you know you deserve today.",
                    "Your warm heart touches lives in ways you don't even realize. Keep shining — the world needs your light."
                ]
            }
        },
        virgo: {
            name: "Virgo", symbol: "♍", element: "Earth", ruler: "Mercury",
            date: "Aug 22 - Sep 23", icon: "h6.svg",
            traits: ["Analytical", "Practical", "Diligent", "Modest"],
            predictions: {
                love: [
                    "Your attentiveness to detail makes your partner feel truly seen and cherished today.",
                    "Service is your love language. Small, thoughtful acts of care speak louder than grand gestures.",
                    "A practical approach to love brings stability. Discuss future plans with your partner openly.",
                    "Your analytical mind helps solve a relationship puzzle. Logic and emotion work together beautifully.",
                    "Health and wellness-focused dates bring connection. Cook together, exercise together, grow together.",
                    "Perfectionism in love can create distance. Embrace imperfections — they make relationships authentic.",
                    "A quiet, meaningful evening brings more intimacy than any extravagant outing. Simplicity is romantic."
                ],
                career: [
                    "Your meticulous nature catches errors others miss. This attention to detail earns you respect and praise.",
                    "Organization and efficiency make you the MVP at work today. Systems you create last a lifetime.",
                    "Health, wellness, or service-oriented careers get a boost. Your desire to help others drives success.",
                    "Data analysis or research reveals important insights. Your methodical approach uncovers hidden patterns.",
                    "A well-organized proposal impresses decision-makers. Your preparation sets you apart from competitors.",
                    "Teaching, mentoring, or editing work flourishes under Mercury's influence. Share your expertise generously.",
                    "Your modest approach belies extraordinary competence. Today, your quiet excellence gets the recognition it deserves."
                ],
                health: [
                    "Your health-conscious nature pays dividends. The routines you maintain keep you in excellent condition.",
                    "Digestive health is your focus area. Probiotic foods and mindful eating habits improve your vitality.",
                    "A new health routine or diet plan shows promising results. Your disciplined approach ensures success.",
                    "Mental decluttering is as important as physical cleanliness. Organize your thoughts through journaling.",
                    "Herbal remedies and natural medicine align with your earthy nature. Explore holistic healing options.",
                    "Your tendency to worry can affect health. Practice letting go of things you cannot control today.",
                    "A methodical fitness plan works better than sporadic intense workouts. Consistency is your superpower."
                ],
                general: [
                    "Order and clarity define your day. Your ability to organize chaos is a gift the world needs.",
                    "An opportunity to serve others brings deep satisfaction. Your helpfulness creates ripples of positive change.",
                    "Details that others overlook become your greatest advantage. Precision opens doors to excellence.",
                    "Self-improvement efforts bear visible fruit. The daily habits you've cultivated are shaping a remarkable you.",
                    "Nature and animals bring comfort and grounding. Spend time with pets or in gardens for inner peace.",
                    "Your analytical mind solves a complex problem that has baffled others. Share your solution to help many.",
                    "Modesty is admirable, but today, acknowledge your achievements. You've earned the right to feel proud."
                ]
            }
        },
        libra: {
            name: "Libra", symbol: "♎", element: "Air", ruler: "Venus",
            date: "Sep 24 - Oct 23", icon: "h7.svg",
            traits: ["Diplomatic", "Harmonious", "Social", "Fair-minded"],
            predictions: {
                love: [
                    "Venus enhances your charm to irresistible levels. Romance and beauty surround you in every interaction.",
                    "Partnership energy is strong. Whether romantic or platonic, meaningful connections deepen significantly.",
                    "Your diplomatic nature resolves a tension in your relationship, restoring harmony and mutual respect.",
                    "Art and beauty shared with a loved one creates magical moments. Visit a gallery or enjoy music together.",
                    "Balance in giving and receiving love is key today. Ensure your needs are met alongside your partner's.",
                    "A social event brings romantic possibilities. Your grace and elegance attract the right kind of attention.",
                    "Justice in love matters. If something feels unfair in your relationship, address it with your signature tact."
                ],
                career: [
                    "Your diplomatic skills resolve a workplace conflict, earning you respect from all parties involved.",
                    "Partnerships and collaborations are favored. Join forces with someone whose skills complement yours.",
                    "Aesthetic-related work — design, fashion, art, or decor — flourishes under Venus's beautiful influence.",
                    "Legal matters or contracts are favored today. The scales of justice tip in your direction gracefully.",
                    "Your ability to see all sides of an issue makes you invaluable in negotiations and strategy sessions.",
                    "A business partnership offers mutual benefits. Trust the synergy when two talented minds unite.",
                    "Your refined taste and sense of harmony improve any project you touch. Beauty is your business asset."
                ],
                health: [
                    "Balance is medicine for Libra. Ensure rest matches activity, and indulgence matches discipline today.",
                    "Kidney and lower back health need attention. Stay hydrated and practice posture-improving exercises.",
                    "Beauty treatments and spa visits boost both appearance and wellbeing. Self-care is not vanity — it's vital.",
                    "Social wellness matters. Surround yourself with positive, harmonious people who uplift your spirit.",
                    "Couples or partner exercises motivate you more than solo workouts. Find your fitness buddy today.",
                    "An aesthetically pleasing environment improves your health. Beautify your space for inner peace.",
                    "Avoid extremes in diet or exercise. Your body thrives most when moderation guides your choices."
                ],
                general: [
                    "Harmony and beauty infuse your day with Venus's golden touch. Everything feels balanced and right.",
                    "Your sense of fairness helps resolve a dispute that has affected multiple people. You bring peace.",
                    "Art and culture nourish your refined soul. Engage with beauty in any form — it's essential to your wellbeing.",
                    "A partnership or collaboration brings results greater than the sum of its parts. Together is better today.",
                    "Decisions may be challenging, but trust your inner scales. The answer that feels most balanced is correct.",
                    "Social grace and elegance open doors that force cannot. Your charm is a powerful but gentle tool.",
                    "Today celebrates the beauty of connection. Every relationship in your life adds a petal to your bloom."
                ]
            }
        },
        scorpio: {
            name: "Scorpio", symbol: "♏", element: "Water", ruler: "Pluto",
            date: "Oct 24 - Nov 22", icon: "h8.svg",
            traits: ["Passionate", "Resourceful", "Mysterious", "Determined"],
            predictions: {
                love: [
                    "Your magnetic intensity draws souls to you. A deep, transformative connection unfolds beautifully.",
                    "Trust and vulnerability create powerful intimacy. Let down your guard with someone who has earned it.",
                    "Passion reaches extraordinary depths today. Your all-or-nothing approach to love creates unforgettable moments.",
                    "A secret or hidden truth comes to light, ultimately strengthening the foundation of your relationship.",
                    "Your loyalty is your most precious gift to those you love. It's reciprocated in ways that touch your soul.",
                    "Emotional alchemy transforms pain into wisdom. Past hurts become fuel for deeper, more authentic love.",
                    "Let go of control in love. The most beautiful things happen when you trust the flow of deep connection."
                ],
                career: [
                    "Research, investigation, or deep analysis brings breakthrough discoveries. Your mind penetrates to the core.",
                    "Resource management and financial strategy are your strengths today. Make decisive moves with confidence.",
                    "A power shift at work benefits you. Your strategic patience has positioned you perfectly for this moment.",
                    "Transformative ideas revolutionize your work approach. What others see as problems, you see as opportunities.",
                    "Your determination overcomes seemingly impossible obstacles. Persistence is the key that unlocks success.",
                    "Psychology, healing, or investigative careers flourish. Your ability to see beneath the surface is unmatched.",
                    "A hidden opportunity reveals itself to you. Your keen perception catches what others completely missed."
                ],
                health: [
                    "Emotional detox is as vital as physical cleansing. Release grudges and negative emotions for wholeness.",
                    "Reproductive health and elimination processes need attention. Signs from your body guide healing today.",
                    "Intense physical activity matches your passionate energy. High-intensity workouts provide excellent release.",
                    "Your regenerative power is remarkable. Recovery from illness or injury progresses faster than expected.",
                    "Water therapy — baths, swimming, or simply being near water — restores your energetic balance beautifully.",
                    "Psychological wellbeing improves through deep self-reflection. Journaling or therapy sessions bring clarity.",
                    "Your all-or-nothing approach to health needs moderation. Sustainable habits beat extreme measures every time."
                ],
                general: [
                    "Transformation is your birthright. Today, shed old patterns like a snake sheds its skin — emerge renewed.",
                    "Deep intuition reveals truths hidden from others. Trust your penetrating insight — it rarely fails you.",
                    "Power dynamics shift in your favor. Your strategic patience and resilience are finally rewarded handsomely.",
                    "Mysteries and secrets fascinate you. A discovery today satisfies your need to understand life's deeper truths.",
                    "Your emotional depth is a superpower, not a weakness. Let it guide you to authentic, meaningful experiences.",
                    "Phoenix energy rises within you. From any ashes, you emerge stronger, wiser, and more beautiful than before.",
                    "Trust in your ability to heal and transform. Every ending you face is actually a powerful new beginning."
                ]
            }
        },
        sagittarius: {
            name: "Sagittarius", symbol: "♐", element: "Fire", ruler: "Jupiter",
            date: "Nov 23 - Dec 22", icon: "h9.svg",
            traits: ["Adventurous", "Philosophical", "Optimistic", "Free-spirited"],
            predictions: {
                love: [
                    "Adventure in love excites you today. Plan a spontaneous trip or try something entirely new together.",
                    "Your optimism and humor make you irresistible. Laughter shared with your partner strengthens your bond.",
                    "Freedom within love is possible. A partner who understands your need for independence is a true keeper.",
                    "Philosophy and deep conversations about life's meaning create intellectual intimacy that thrills your soul.",
                    "A long-distance love connection brings exciting news. Distance makes the heart grow genuinely fonder.",
                    "Your honesty, though sometimes blunt, is refreshing. Someone appreciates your truthfulness in a world of games.",
                    "Cultural exchange enriches your love life. Someone from a different background brings fascinating perspectives."
                ],
                career: [
                    "Jupiter expands your professional horizons. International opportunities or higher education open doors.",
                    "Teaching, publishing, or philosophical work thrives. Sharing your wisdom inspires and educates many.",
                    "A bold career risk pays off magnificently. Your optimistic gamble leads to unexpected and bountiful success.",
                    "Travel-related work or businesses expand rapidly. Your adventurous spirit attracts exciting global clients.",
                    "Legal matters resolve favorably. Justice and truth are on your side, guided by Jupiter's benevolent hand.",
                    "Higher learning or specialized training leads to a significant career upgrade. Invest in your education.",
                    "Your big-picture thinking solves problems others can't see beyond. Visionary ideas are rewarded today."
                ],
                health: [
                    "Outdoor adventures and sports fuel your fiery spirit. Hiking, horseback riding, or cycling revitalize you.",
                    "Your hips and thighs need attention. Stretching and flexibility exercises prevent strain and discomfort.",
                    "Exotic flavors and international cuisine nourish your adventurous palate and expand your dietary horizons.",
                    "Excessive indulgence is a risk today. Jupiter's expansive energy needs the balance of mindful moderation.",
                    "Travel to a new place, even locally, refreshes your mind and body. Change of scenery is healing medicine.",
                    "Optimism is medicine for the soul. Your positive outlook genuinely contributes to better physical health.",
                    "Learning about wellness philosophies from different cultures enriches your health approach beautifully."
                ],
                general: [
                    "The world is your playground today. Jupiter opens doors to experiences that expand your consciousness.",
                    "A philosophical insight brings profound clarity about your life's purpose and direction. Listen carefully.",
                    "Freedom and truth are your guiding stars. Follow them fearlessly — they never lead you astray.",
                    "An adventure awaits — whether physical, intellectual, or spiritual. Say yes to the universe's invitation.",
                    "Your optimistic spirit lifts everyone around you. In a world of cynics, your hope is truly revolutionary.",
                    "Education and knowledge are your keys to growth. Never stop learning — curiosity is your greatest treasure.",
                    "The universe rewards your faith and adventurous spirit. The arrow you released long ago hits its target today."
                ]
            }
        },
        capricorn: {
            name: "Capricorn", symbol: "♑", element: "Earth", ruler: "Saturn",
            date: "Dec 23 - Jan 20", icon: "h10.svg",
            traits: ["Ambitious", "Disciplined", "Responsible", "Patient"],
            predictions: {
                love: [
                    "Your steady devotion speaks volumes. A partner recognizes the depth of your commitment today.",
                    "Building a future together excites you. Practical conversations about goals and plans strengthen your bond.",
                    "Your reserved nature hides a passionate soul. Today, let someone glimpse the fire beneath your composure.",
                    "Time and patience have built something remarkable in your love life. Take a moment to appreciate it.",
                    "A mature approach to love brings lasting satisfaction. You prefer depth over drama — and that's beautiful.",
                    "Family traditions and shared responsibilities bring you closer to your partner. Building a legacy together.",
                    "Allow yourself to receive love without feeling you must earn it. You are worthy just as you are."
                ],
                career: [
                    "Saturn rewards your long-term dedication. A major career milestone or achievement is within your reach.",
                    "Your ambition and work ethic set you apart. Superiors notice your consistent, reliable excellence.",
                    "Strategic planning leads to significant business growth. Your calculated approach minimizes risk effectively.",
                    "Authority and respect are earned through your actions. Today, your leadership is acknowledged publicly.",
                    "Long-term investments show returns. Your patience in financial matters proves to be a winning strategy.",
                    "A mentoring role suits you today. Your experience and wisdom guide younger professionals successfully.",
                    "The mountain you've been climbing reveals its summit. Your persistence is about to be rewarded spectacularly."
                ],
                health: [
                    "Bone and joint health deserve attention. Calcium-rich foods and gentle weight-bearing exercises help.",
                    "Discipline in your health routine brings visible results. Consistency is your greatest wellness asset.",
                    "Don't let work stress affect your body. Schedule breaks and set boundaries to protect your wellbeing.",
                    "Traditional health practices and remedies work well for you. Trust time-tested methods and approaches.",
                    "Your teeth, skin, and skeletal system need care today. Prevention is always better than cure for you.",
                    "Mountain air or elevated places bring unique healing. If possible, seek higher ground for rejuvenation.",
                    "Structured workout plans suit your disciplined nature. Track progress methodically for best results."
                ],
                general: [
                    "Your patience and persistence are paying off. The seeds you planted long ago are now bearing fruit.",
                    "Responsibility and duty guide your path, and today they lead you to unexpected rewards and recognition.",
                    "A long-term goal shows significant progress. Your systematic approach to life creates remarkable results.",
                    "Wisdom comes from experience, and you have plenty. Share your insights with those who seek guidance.",
                    "Structure and order bring you peace. In the chaos of the modern world, your stability is a rare treasure.",
                    "Your quiet strength moves mountains. Not all heroes are loud — some build empires brick by patient brick.",
                    "Legacy matters to you, and today you take important steps toward creating something that outlasts time."
                ]
            }
        },
        aquarius: {
            name: "Aquarius", symbol: "♒", element: "Air", ruler: "Uranus",
            date: "Jan 21 - Feb 19", icon: "h11.svg",
            traits: ["Innovative", "Humanitarian", "Independent", "Original"],
            predictions: {
                love: [
                    "Your unique approach to love attracts someone who truly appreciates your originality and independence.",
                    "Intellectual connection sparks romantic interest. A meeting of minds leads to a meeting of hearts.",
                    "Friendship is the foundation of your best relationships. Today, a friend becomes something beautifully more.",
                    "Your humanitarian heart extends to intimate relationships. Compassion and understanding deepen your bond.",
                    "Space and freedom within love are not contradictions. Today, your partner understands and respects this.",
                    "A group social setting brings unexpected romantic connections. Community events favor love for Aquarius.",
                    "Your unconventional approach to romance is refreshing. Someone finds your uniqueness absolutely captivating."
                ],
                career: [
                    "Innovation and technology bring career breakthroughs. Your future-focused thinking is your greatest asset.",
                    "Humanitarian or social cause work brings fulfillment and recognition. Making a difference IS your career.",
                    "A radical idea challenges the status quo at work, and today, people are ready to listen to your vision.",
                    "Team collaborations produce revolutionary results. Your gift for uniting diverse minds creates magic.",
                    "Technology-related opportunities expand rapidly. Your comfort with the digital world gives you an edge.",
                    "A community project or social enterprise gains unexpected support. Your vision inspires collective action.",
                    "Remote or flexible work arrangements suit your independent nature perfectly. Productivity soars on your terms."
                ],
                health: [
                    "Circulation and ankle health need attention. Walking, swimming, or cycling improve blood flow naturally.",
                    "Your nervous system benefits from grounding practices. Balance your air energy with earthy activities.",
                    "Group fitness or community sports bring both health benefits and social connection that nurture your soul.",
                    "Technology-assisted wellness — apps, wearables, online programs — aligns with your forward-thinking nature.",
                    "Unusual or alternative healing methods appeal to you. Explore innovative approaches to wellness today.",
                    "Your mind-body connection is strong. Mental clarity directly improves your physical wellbeing today.",
                    "Helping others improves your own health. The act of service releases positive hormones and healing energy."
                ],
                general: [
                    "Your innovative mind envisions possibilities others cannot yet see. Today, share your revolutionary ideas.",
                    "Community and friendship nourish your unique soul. Collective experiences bring more joy than solitary ones.",
                    "Uranus sparks unexpected changes that align perfectly with your desire for progress and transformation.",
                    "Your humanitarian values guide you toward meaningful action. Small acts of kindness create global ripples.",
                    "Embrace your eccentricity — it's your superpower. The world needs your original perspective now more than ever.",
                    "Technology and tradition merge in interesting ways today. Your ability to bridge old and new creates value.",
                    "The age of Aquarius energy amplifies your natural gifts. Lead the way toward a more equitable, beautiful future."
                ]
            }
        },
        pisces: {
            name: "Pisces", symbol: "♓", element: "Water", ruler: "Neptune",
            date: "Feb 20 - Mar 20", icon: "h12.svg",
            traits: ["Compassionate", "Intuitive", "Artistic", "Dreamy"],
            predictions: {
                love: [
                    "Neptune wraps your love life in a dreamy, ethereal glow. Romance feels like a beautiful fairy tale today.",
                    "Your deep empathy creates soul-level connections. Someone feels truly understood in your presence.",
                    "Creative expressions of love — poetry, music, art — touch hearts more deeply than words alone ever could.",
                    "Spiritual connection with your partner transcends the physical. Meditation together deepens your bond.",
                    "Your compassionate nature heals a loved one's pain. Simply being present is the most powerful gift.",
                    "Dreams may contain messages about your love life. Pay attention to symbols and feelings upon waking.",
                    "Unconditional love flows naturally from your heart. Today, this gift returns to you multiplied beautifully."
                ],
                career: [
                    "Creative and artistic pursuits shine today. Music, film, photography, or writing bring professional success.",
                    "Your intuition guides career decisions perfectly. Trust the feelings that logic can't quite explain.",
                    "Healing arts, spirituality, or counseling careers flourish under Neptune's compassionate and mystical influence.",
                    "A daydream or creative vision reveals a viable professional opportunity. Imagination becomes innovation.",
                    "Water-related industries or work near water brings good fortune and inspiration to your workday.",
                    "Your ability to read people and situations gives you an invisible advantage in business negotiations.",
                    "Charitable work or volunteering connects you with influential people who recognize your pure intentions."
                ],
                health: [
                    "Your feet and lymphatic system need attention. Foot soaks, massage, and gentle detox bring relief.",
                    "Water is your element and your medicine. Swim, bathe, or simply drink more water for profound healing.",
                    "Your sensitive nature absorbs others' energies. Protect yourself through energetic boundaries and cleansing.",
                    "Dreams provide insight into your health needs. Keep a dream journal to decode your subconscious guidance.",
                    "Artistic expression is therapeutic for Pisces. Creating art literally heals your mind, body, and spirit.",
                    "Avoid substances that cloud your already sensitive perception. Clarity comes from purity and mindfulness.",
                    "Spiritual practices — meditation, prayer, chanting — provide the deepest form of healing available to you."
                ],
                general: [
                    "The mystical and the mundane merge beautifully today. Neptune reveals magic in the most ordinary moments.",
                    "Your compassion creates ripples of kindness throughout the world. Every act of empathy matters infinitely.",
                    "Artistic inspiration flows like a river. Allow creativity to carry you wherever it wishes to go today.",
                    "Spiritual growth accelerates as you connect with your higher self. Trust the invisible guidance around you.",
                    "Dreams, synchronicities, and signs from the universe abound. You're more connected to the cosmos than you realize.",
                    "Your ability to transcend boundaries — between self and other, dream and reality — is a precious, rare gift.",
                    "The ocean of consciousness flows through you. Today, you feel the unity of all things most profoundly."
                ]
            }
        }
    };

    // ─── Lucky Data Arrays ─────────────────────────────────────────
    const luckyColors = [
        "Red", "Royal Blue", "Emerald Green", "Golden Yellow", "Purple",
        "Silver", "Coral", "Turquoise", "Magenta", "Ivory",
        "Crimson", "Teal", "Amber", "Lavender", "Copper",
        "Sapphire Blue", "Rose Gold", "Forest Green", "Pearl White", "Burgundy"
    ];

    const luckyGems = [
        "Ruby", "Diamond", "Emerald", "Sapphire", "Pearl",
        "Topaz", "Opal", "Amethyst", "Garnet", "Aquamarine",
        "Moonstone", "Turquoise", "Citrine", "Peridot", "Tanzanite"
    ];

    const moods = [
        "Energetic & Vibrant", "Calm & Centered", "Creative & Inspired",
        "Thoughtful & Reflective", "Joyful & Optimistic", "Determined & Focused",
        "Peaceful & Serene", "Bold & Adventurous", "Compassionate & Loving",
        "Mystical & Intuitive", "Confident & Powerful", "Harmonious & Balanced"
    ];

    const compatibility = [
        "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
        "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
    ];

    // ─── Date-Based Seed Generator ─────────────────────────────────
    function getDaySeed(dateObj) {
        const now = dateObj || new Date();
        return now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
    }

    function seededRandom(seed) {
        let x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
    }

    function getIndex(seed, arrayLength) {
        return Math.floor(seededRandom(seed) * arrayLength);
    }

    // ─── Generate Daily Horoscope ──────────────────────────────────
    function generateDailyHoroscope(signKey, dayOffset = 0) {
        const sign = zodiacSigns[signKey];
        if (!sign) return null;

        const targetDate = new Date();
        if (dayOffset !== 0) {
            targetDate.setDate(targetDate.getDate() + dayOffset);
        }

        const daySeed = getDaySeed(targetDate);
        const signSeed = signKey.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
        const combinedSeed = daySeed + signSeed;

        const prediction = {
            sign: sign.name,
            symbol: sign.symbol,
            element: sign.element,
            ruler: sign.ruler,
            date: sign.date,
            actualDate: targetDate,
            traits: sign.traits,
            love: sign.predictions.love[getIndex(combinedSeed * 1, sign.predictions.love.length)],
            career: sign.predictions.career[getIndex(combinedSeed * 2, sign.predictions.career.length)],
            health: sign.predictions.health[getIndex(combinedSeed * 3, sign.predictions.health.length)],
            general: sign.predictions.general[getIndex(combinedSeed * 4, sign.predictions.general.length)],
            luckyNumber: (getIndex(combinedSeed * 5, 99) + 1),
            luckyNumber2: (getIndex(combinedSeed * 6, 99) + 1),
            luckyColor: luckyColors[getIndex(combinedSeed * 7, luckyColors.length)],
            luckyGem: luckyGems[getIndex(combinedSeed * 8, luckyGems.length)],
            mood: moods[getIndex(combinedSeed * 9, moods.length)],
            compatibility: compatibility[getIndex(combinedSeed * 10, compatibility.length)],
            overallRating: Math.min(5, Math.max(3, getIndex(combinedSeed * 11, 3) + 3)),
            loveRating: Math.min(5, Math.max(2, getIndex(combinedSeed * 12, 4) + 2)),
            careerRating: Math.min(5, Math.max(2, getIndex(combinedSeed * 13, 4) + 2)),
            healthRating: Math.min(5, Math.max(3, getIndex(combinedSeed * 14, 3) + 3))
        };

        return prediction;
    }

    // ─── Star Rating HTML ──────────────────────────────────────────
    function getStarHTML(rating) {
        let html = '';
        for (let i = 0; i < 5; i++) {
            html += i < rating ? '⭐' : '☆';
        }
        return html;
    }

    // ─── Format Today's Date ───────────────────────────────────────
    function getFormattedDate() {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date().toLocaleDateString('en-IN', options);
    }

    // ─── Navigate to Horoscope Detail Page ────────────────────────
    function goToHoroscopePage(signKey) {
        window.location.href = 'horoscope-detail.html?sign=' + signKey;
    }

    // ─── Initialize (Home Page) ────────────────────────────────────
    function init() {
        const signKeys = [
            'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo',
            'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'
        ];

        const signBoxes = document.querySelectorAll('.as_sign_box');

        signBoxes.forEach(function (box, index) {
            if (index < signKeys.length) {
                box.setAttribute('data-sign', signKeys[index]);
                box.style.cursor = 'pointer';

                box.addEventListener('click', function () {
                    const signKey = this.getAttribute('data-sign');
                    goToHoroscopePage(signKey);
                });
            }
        });

        // Update section description
        const sectionDesc = document.querySelector('.as_horoscope_wrapper .as_font14.as_padderTop20');
        if (sectionDesc) {
            sectionDesc.innerHTML = 'Click on your zodiac sign to discover your personalized daily horoscope reading.<br>Predictions are updated every day based on celestial movements. 🌟';
        }
    }

    // ─── Fetch Real-Time Horoscope using Gemini API ────────────────────────────────
    async function fetchHoroscope(signKey, dayOffset = 0) {
        // REPLACE 'YOUR_GEMINI_API_KEY' WITH YOUR ACTUAL API KEY
        const API_KEY = 'YOUR_GEMINI_API_KEY';

        if (!API_KEY || API_KEY === 'YOUR_GEMINI_API_KEY') {
            console.warn("Please add your Gemini API Key in assets/js/horoscope.js");
            return null;
        }

        const date = new Date();
        date.setDate(date.getDate() + dayOffset);
        const dateString = date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

        const prompt = `Generate a daily horoscope for the zodiac sign ${signKey.toUpperCase()} for the date ${dateString}.
Please provide the response strictly as a JSON object with these exact keys:
"overview", "love", "career", "health".
Each value should be a 2-3 sentence prediction. No markdown, just raw JSON.`;

        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: prompt }]
                    }],
                    generationConfig: {
                        responseMimeType: "application/json"
                    }
                })
            });

            if (!response.ok) throw new Error('Gemini API request failed');
            const data = await response.json();

            if (data.candidates && data.candidates[0].content) {
                const textResponse = data.candidates[0].content.parts[0].text;
                const result = JSON.parse(textResponse);

                return {
                    horoscope: result.overview,
                    love: result.love,
                    career: result.career,
                    health: result.health
                };
            }
            return null;
        } catch (error) {
            console.error('Gemini API Error:', error);
            return null;
        }
    }

    // ─── Public API ────────────────────────────────────────────────
    return {
        init: init,
        getHoroscope: generateDailyHoroscope,
        fetchHoroscope: fetchHoroscope
    };

})();

// Initialize when DOM is ready
if (typeof $ !== 'undefined') {
    $(document).ready(function () {
        HoroscopeEngine.init();
    });
} else {
    document.addEventListener('DOMContentLoaded', function () {
        HoroscopeEngine.init();
    });
}
