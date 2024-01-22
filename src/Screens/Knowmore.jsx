import React from 'react';
import { useNavigate } from 'react-router-dom';

const WeddingInfoPage = () => {
    const navigate = useNavigate();

    const handleclick = ()=>{
navigate("/");
    }

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
  };

  const sectionStyles = {
    marginBottom: '40px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '80%',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',
  };

  const animateOnHover = {
    transform: 'scale(1.05)',
  };

  return (
    <div style={containerStyles}>
         <button onClick={handleclick} style={{
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    outline: 'none',
    // Add other styles as needed
  }}>Home page</button>

      <h1 style={{ marginBottom: '30px' }}>Indian Wedding Insights</h1>

      <div
        style={{ ...sectionStyles, ...animateOnHover }}
        onClick={() => alert('Clicked on Banquet Hall History')}
      >
        <h2>Banquet Hall History</h2>
        <p>
        The history of banquet halls is a fascinating journey that spans centuries, reflecting cultural, social, and economic shifts. These venues have played a crucial role in hosting celebrations, ceremonies, and important gatherings, evolving alongside human civilization.

The concept of communal feasting dates back to ancient times. In ancient Greece, for example, symposia were gatherings where men discussed philosophy, politics, and culture while enjoying food and wine. These events laid the foundation for the communal nature of banquets. Ancient Rome also embraced feasting, with elaborate banquets known as "convivia" where the wealthy showcased their status through opulent displays of food and entertainment.

As societies progressed, so did the traditions of communal dining. During the Middle Ages, banquets were often hosted in castles and manors. Feasts became elaborate affairs, with a focus on displaying the host's wealth and power. The Renaissance period saw a continuation of this trend, with grand banquets hosted in palaces and villas across Europe.

The 17th and 18th centuries marked a shift in banquet culture. Formal dining became more prevalent, and dedicated banquet rooms began to emerge in aristocratic homes. In France, the "salon de compagnie" became a space specifically designed for social gatherings and feasts. Meanwhile, in England, the dining room evolved as a separate space for formal meals.

The 19th century witnessed the rise of banqueting as a social art form. Lavish banquet halls were constructed in hotels and public buildings, providing spaces for large-scale events. The Industrial Revolution played a role in this development, as increased prosperity allowed for more extravagant celebrations. The Crystal Palace in London, built for the Great Exhibition of 1851, is an early example of a grand venue designed for large gatherings.

The 20th century brought further changes to banquet hall history. As urbanization and modernization progressed, banquet halls became integral to both social and business events. Hotels and dedicated event spaces started to offer banquet facilities, catering to a growing demand for organized celebrations. The mid-20th century saw the emergence of standalone banquet halls, purpose-built structures designed to accommodate various events.

With the rise of the hospitality industry, banquet halls became key components of hotels and resorts. These venues offered a one-stop solution for events, providing not only a space but also catering services, staff, and amenities. Banquet halls became versatile spaces, hosting weddings, conferences, galas, and more.

In recent decades, the banquet hall industry has undergone further transformations. Advances in technology have enhanced event planning and management, allowing for more sophisticated audiovisual presentations and streamlined logistics. Sustainability concerns have also influenced the design and operations of banquet halls, with a growing emphasis on eco-friendly practices.

Today, banquet halls continue to evolve to meet the diverse needs of a globalized society. The concept has spread across cultures, adapting to local traditions and preferences. Modern banquet halls are equipped with state-of-the-art facilities, offering customizable experiences for a wide range of events. From intimate weddings to large corporate conferences, these venues remain central to the social and professional fabric of society.

In conclusion, the history of banquet halls is a rich tapestry woven through the ages. From ancient feasts in Greece to the grand celebrations of the Renaissance, and from the opulent banquets of the 19th century to the versatile venues of the 21st century, banquet halls have played a pivotal role in shaping the way we come together to celebrate and commemorate important moments in our lives.
        </p>
      </div>

      <div
        style={{ ...sectionStyles, ...animateOnHover }}
        onClick={() => alert('Clicked on Rituals of India')}
      >
        <h2>Rituals of India</h2>
        <p>
        India, with its diverse cultural tapestry, is a land of rich traditions and rituals that have been passed down through generations. These rituals, deeply rooted in religious, social, and familial contexts, play a significant role in shaping the cultural identity of the country. Exploring the rituals of India involves delving into the multifaceted aspects of daily life, celebrations, and spiritual practices that contribute to the vibrancy of the nation.

**Religious Rituals:**
Religion is a cornerstone of Indian life, and rituals associated with various faiths are woven into the fabric of everyday existence. Hinduism, the predominant religion, boasts a plethora of rituals encompassing prayers, ceremonies, and festivals. The sacred thread ceremony, known as "Upanayana," is a significant Hindu ritual where young boys are initiated into the study of the Vedas. Another vital ritual is the "Aarti," a ceremonial worship involving the offering of light to deities.

In Islam, the five daily prayers, or "Salah," form a fundamental ritual. The holy month of Ramadan is marked by fasting from dawn to sunset, culminating in the joyous celebration of Eid al-Fitr. Sikhism, with its emphasis on community living, incorporates rituals like "Langar," a community kitchen where free meals are served to all, regardless of caste or creed.

**Ceremonial Rites of Passage:**
Rites of passage hold immense significance in Indian society, symbolizing transitions across various life stages. The "Namkaran," or naming ceremony, is a Hindu ritual where a newborn is given a name, often selected based on astrological considerations. The "Annaprashan" marks a baby's first intake of solid food, while the "Mundan" involves the shaving of a child's head, signifying the removal of impurities.

The "Vivaha" or wedding ceremony is a grand affair, characterized by elaborate rituals and customs that vary across regions. The exchange of vows, the sacred fire ceremony, and the application of vermilion (sindoor) on the bride's forehead are integral parts of Hindu weddings. Similarly, other communities, such as Muslims and Christians, have their unique wedding rituals, each steeped in tradition.

**Festivals:**
India's calendar is punctuated by a multitude of festivals, each with its distinctive rituals and celebrations. Diwali, the Festival of Lights, involves lighting lamps, bursting fireworks, and sharing sweets. Holi, the Festival of Colors, sees people smearing each other with colored powders, symbolizing the triumph of good over evil. Eid is marked by special prayers, feasts, and the exchange of gifts.

Ganesh Chaturthi, a Hindu festival dedicated to Lord Ganesha, involves the installation of Ganesha idols in homes and public spaces, followed by immersion in water. Navratri, a nine-night festival, includes dance forms like Garba and Dandiya, celebrating the triumph of the goddess Durga over the demon Mahishasura.

**Cultural Performances:**
Dance and music are integral components of Indian culture, and the associated rituals are often deeply spiritual. Bharatanatyam, a classical dance form, is steeped in tradition, with intricate mudras (hand gestures) and expressive facial movements telling stories from Hindu mythology. Classical music, both Hindustani and Carnatic, involves rituals such as tuning instruments and paying homage to the divine before performances.

**Spiritual Pilgrimages:**
India is dotted with numerous sacred sites, and undertaking pilgrimages is a revered ritual for millions. The Char Dham Yatra, encompassing Yamunotri, Gangotri, Kedarnath, and Badrinath, holds great significance in Hinduism. The Kumbh Mela, a massive gathering of pilgrims, takes place at the confluence of sacred rivers, where participants immerse themselves in ritualistic bathing to cleanse their sins.

**Daily Customs and Practices:**
The tapestry of Indian rituals extends to the daily lives of its people. The "Puja" or worship at home involves lighting incense, offering flowers, and reciting prayers. The application of "Bindi" (forehead mark) and "Sindoor" by married women carries symbolic significance in Hindu culture. The act of breaking a coconut before starting a new venture is considered auspicious in many communities.

**Yoga and Meditation:**
In recent times, the practice of yoga and meditation has gained global popularity, but in India, it has been a part of spiritual rituals for centuries. Yoga, with its origins in ancient texts like the Yoga Sutras, involves physical postures, breath control, and meditation to achieve spiritual growth. Meditation, often associated with mindfulness and self-realization, is a ritualistic practice in various spiritual traditions.

In conclusion, the rituals of India form a kaleidoscope of traditions, reflecting the country's immense cultural diversity. These rituals, whether religious, familial, or societal, contribute to the unique identity of India and its people. They serve as a bridge between the past and the present, offering a glimpse into the timeless practices that continue to shape the nation's ethos.
        </p>
      </div>

      <div
        style={{ ...sectionStyles, ...animateOnHover }}
        onClick={() => alert('Clicked on Marriage System in India')}
      >
        <h2>Marriage System in India</h2>
        <p>
        The institution of marriage in India is a complex tapestry woven with cultural, religious, and social threads that have evolved over centuries. Marriage is not merely a union of two individuals; it is a sacred bond that extends beyond the couple to encompass families and communities. Exploring the marriage system in India requires delving into its diverse practices, rituals, and the societal significance attached to this sacred union.

**Diversity in Marriage Practices:**
India, with its vast cultural landscape, is home to diverse marriage practices that vary across regions, communities, and religions. The arranged marriage system is prevalent, where families play a pivotal role in matchmaking. While arranged marriages may involve varying degrees of family involvement, love marriages, where individuals choose their life partners, are also on the rise, particularly in urban areas.

**Religious Influence on Marriages:**
Religion significantly shapes the marriage system in India, with each faith bringing its unique rituals and traditions. In Hinduism, marriages are considered a sacrament, and the sacred vows taken during the ceremony are meant to last for seven lifetimes. The marriage rituals, such as the exchange of garlands, the sacred fire ceremony, and the application of sindoor (vermilion) by the bride, vary across regions but share a common thread of sanctity.

In Islam, the marriage ceremony is called "Nikah," and it involves a contract between the bride and groom. The exchange of vows, known as the "Ijab" and "Qubul," is witnessed by the community. Christianity, too, has its set of rituals, with the exchange of vows, the blessing of the rings, and the pronouncement of the couple as husband and wife in the presence of a priest or minister.

Sikh marriages are solemnized in a Gurudwara, where the couple takes part in the Anand Karaj ceremony. The central focus is on the Guru Granth Sahib, and the couple circumambulates the holy scripture, symbolizing their commitment to the teachings of Sikhism.

**Arranged Marriages:**
Arranged marriages, a prevalent practice in India, involve families taking an active role in selecting potential life partners for their children. Matchmaking often considers factors such as caste, community, socioeconomic status, and horoscope compatibility. The process may involve consultations with family elders, astrologers, and even matchmakers. While the approach may seem traditional, it has adapted to changing times, with families now considering the preferences and compatibility of the individuals involved.

**Rites of Passage in Marriages:**
Indian weddings are elaborate affairs, marked by a series of rituals and ceremonies that precede and follow the main marriage ceremony. The engagement ceremony, known as "Sagai" or "Roka," marks the formal commitment between the families. The "Mehendi" ceremony involves the application of henna on the bride's hands and feet, symbolizing beauty and auspiciousness.

The "Sangeet" ceremony is a musical extravaganza where families come together to celebrate through dance and song. The "Haldi" ceremony involves applying turmeric paste to the bride and groom, signifying purity and auspiciousness. The marriage ceremony itself varies across communities but generally involves the exchange of vows, the giving away of the bride, and the blessings of family and elders.

**Social Significance:**
Marriage in India is not just the union of two individuals; it is the merging of two families and communities. Socially, marriage is viewed as a crucial institution that ensures the continuation of lineage, family honor, and societal stability. Families often invest significant resources, both emotional and financial, in arranging and conducting marriages, considering it a responsibility and a matter of prestige.

The concept of "Ghar Jamai" (son-in-law living with the bride's family) or "Doli" (bride leaving her parental home) reflects the societal expectations and the dynamics associated with marriage. These practices, while rooted in tradition, are also subject to evolving perspectives and changing gender roles.

**Challenges and Changing Dynamics:**
While the traditional marriage system remains deeply ingrained in Indian culture, it is not immune to the winds of change. Urbanization, education, and economic independence have led to shifts in attitudes towards marriage. Younger generations are increasingly asserting their agency in choosing life partners, leading to a rise in inter-caste and inter-religious marriages.

Moreover, the advent of technology has transformed the matchmaking landscape. Online matrimonial platforms have become popular, providing individuals with a broader pool of potential partners while retaining certain cultural and religious filters. This evolution reflects a blend of tradition and modernity, with individuals seeking compatibility alongside the approval of their families.

**Legal Framework:**
The legal framework surrounding marriage in India is diverse due to the presence of different personal laws for various communities. The Hindu Marriage Act, Muslim Personal Law, Christian Marriage Act, and Special Marriage Act are some of the key legislations governing marriages. These acts outline the legal requirements, registration processes, and grounds for divorce, providing a structured framework for matrimonial matters.

**Conclusion:**
In essence, the marriage system in India is a vibrant mosaic that reflects the cultural, religious, and social diversity of the country. While traditional practices continue to play a significant role, the institution is evolving to accommodate changing societal dynamics and individual aspirations. Marriage remains a cornerstone of Indian society, embodying the sanctity of commitment, familial bonds, and the continuity of cultural heritage.
        </p>
      </div>
      <button onClick={handleclick} style={{
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    outline: 'none',
    // Add other styles as needed
  }}>Go back to Home page</button>
    </div>

  );
};

export default WeddingInfoPage;
