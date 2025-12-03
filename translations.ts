export const translations = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      services: 'Hizmetler',
      projects: 'Projeler',
      ai_automation: 'AI & Otomasyon',
      training: 'Eğitimler',
      contact: 'İletişim',
      getQuote: 'Teklif Al'
    },
    hero: {
      subtitle: 'EXCEL & POWER BI ÇÖZÜMLERİ',
      title: 'Verilerinizi',
      titleHighlight: 'Güce',
      titleSuffix: 'Dönüştürün',
      description: 'Karmaşık Excel tablolarında kaybolmayın. Power BI ile dinamik raporlar oluşturun, süreçlerinizi otomatikleştirin ve veriye dayalı kararlar alarak işletmenizi büyütün.',
      cta: 'Ücretsiz Analiz',
      services: 'Hizmetlerimiz',
      automation: 'Veri Otomasyonu'
    },
    about: {
      title: 'Hakkımda',
      description: 'Merhaba, ben Veri Çözümleri Uzmanınız. Yıllardır kurumsal firmaların veri yönetimi, raporlama ve otomasyon süreçlerinde aktif rol alıyorum. Excel ve Power BI konusundaki derin teknik bilgimi, iş dünyasının pratik ihtiyaçlarıyla birleştirerek size özel çözümler sunuyorum.',
      specialtiesTitle: 'Uzmanlıklar',
      specialties: 'Advanced Excel, VBA, Power BI (DAX & M Query), SQL, Office 365',
      approachTitle: 'Yaklaşımım',
      approach: 'Karmaşık verileri, herkesin anlayabileceği basit ve etkili görsellere dönüştürmek.',
      goal: 'Hedefim, manuel iş yükünüzü minimuma indirerek, verilerinizden en doğru stratejik kararları almanızı sağlamaktır.'
    },
    services: {
      subtitle: 'HİZMETLERİMİZ',
      title: 'Veri Odaklı Çözümler',
      description: 'İşletmenizin dijital dönüşümünü Excel ve Power BI uzmanlığımızla hızlandırın.',
      items: [
         { title: 'Power BI Raporlama', desc: 'Verilerinizi görselleştirin. İnteraktif dashboardlar ile şirketinizin performansını anlık olarak takip edin.' },
         { title: 'İleri Düzey Excel', desc: 'Karmaşık formüller, VBA makroları ve Pivot tablolar ile manuel iş yükünü azaltan özel Excel çözümleri.' },
         { title: 'Veri Analizi', desc: 'Dağınık verilerinizi temizliyor, düzenliyor ve stratejik kararlar almanızı sağlayacak içgörülere dönüştürüyoruz.' },
         { title: 'Office Otomasyonu', desc: 'Outlook, Word ve Excel arasındaki süreçleri otomatikleştirerek zamandan tasarruf etmenizi sağlıyoruz.' },
         { title: 'Veritabanı Yönetimi', desc: 'SQL ve Access tabanlı çözümlerle verilerinizi güvenli ve erişilebilir bir yapıda saklayın.' },
         { title: 'Kurumsal Eğitimler', desc: 'Ekibiniz için başlangıçtan ileri seviyeye Excel ve Power BI eğitim programları.' }
      ]
    },
    aiAutomation: {
        subtitle: 'GELECEĞİN TEKNOLOJİSİ',
        title: 'Yapay Zeka ve İş Akışı Otomasyonu',
        description: 'Sıradan veri analizinin ötesine geçin. n8n ile iş akışlarını bağlayın ve LLM destekli akıllı asistanlar ile verimliliği maksimuma çıkarın.',
        workflowTitle: 'n8n İş Akışları',
        workflowDesc: 'Excel, Gmail, Slack ve CRM sistemlerinizi birbirine bağlayan, kodsuz (low-code) otomasyon süreçleri tasarlıyoruz.',
        chatbotTitle: 'AI Chatbotlar',
        chatbotDesc: 'Şirket içi dokümanlarınızla eğitilmiş, soruları yanıtlayan ve işlem yapabilen akıllı asistanlar.',
        analysisTitle: 'Akıllı Analiz',
        analysisDesc: 'Büyük veri setlerini yapay zeka ile analiz edip, insan gözünün kaçırabileceği trendleri ortaya çıkarıyoruz.',
        cta: 'Otomasyonu Keşfet'
    },
    portfolio: {
      subtitle: 'REFERANSLAR',
      title: 'Örnek Projelerimiz',
      description: 'İş süreçlerini nasıl dijitalleştirdiğimize ve verimliliği nasıl artırdığımıza dair seçilmiş çalışmalar.',
      cta: 'Sizin projenizi de hayata geçirelim.',
      ctaButton: 'Proje Teklifi Alın',
      modal: {
        challenge: 'Zorluk & İhtiyaç',
        solution: 'Geliştirilen Çözüm',
        outcome: 'Elde Edilen Sonuç',
        close: 'Kapat'
      },
      items: [
        { 
          title: "Kurumsal Satış Dashboard'u", 
          desc: "Çok şubeli bir perakende zinciri için anlık satış, stok ve karlılık takibi sağlayan interaktif Power BI raporu.",
          challenge: "Müşterinin 50'den fazla şubesinden gelen veriler dağınıktı ve günlük raporların hazırlanması her sabah 3-4 saat sürüyordu. Anlık stok takibi yapılamadığı için stok maliyetleri yüksekti.",
          solution: "Power Query ile tüm veri kaynakları (ERP, Excel, SQL) tek bir veri modelinde birleştirildi. Power BI üzerinde yöneticiler için özet, şube müdürleri için detaylı dashboardlar tasarlandı. Veri yenileme işlemi tam otomatik hale getirildi.",
          outcome: "Raporlama süresi 'sıfıra' indi (anlık veri). Stok maliyetlerinde %15 azalma sağlandı ve şube bazlı karlılık analizi ile stratejik kararlar hızlandı."
        },
        { 
          title: "Otomatik Stok Takip Sistemi", 
          desc: "Küçük ölçekli üretim tesisleri için Excel tabanlı, barkod okuyucu entegrasyonlu ve otomatik sipariş uyarısı veren stok yönetim arayüzü.",
          challenge: "Üretim sahasında stok giriş-çıkışları kağıt üzerinde tutuluyordu. Manuel veri girişi hatalara yol açıyor ve kritik ham maddeler bittiğinde üretim duruyordu.",
          solution: "Excel VBA kullanılarak kullanıcı dostu bir arayüz (UserForm) geliştirildi. Barkod okuyucu entegrasyonu sağlandı. Kritik stok seviyesinin altına düşen ürünler için otomatik e-posta uyarısı sistemi kuruldu.",
          outcome: "Hatalı veri girişleri %90 oranında azaldı. Üretim duruşları sona erdi ve yıllık stok sayım süresi 2 günden 4 saate düştü."
        },
        { 
          title: "Kurumsal Veri Modelleme & Star Schema", 
          desc: "Farklı departman verilerinin (Satış, İK, Finans) merkezi bir veri ambarı modelinde birleştirilmesi ve raporlanabilir hale getirilmesi.",
          challenge: "Şirketteki veriler izole sistemlerde (silo) tutuluyordu. Satış ve Finans raporları birbirini tutmuyor, departmanlar arası KPI takibi yapılamıyordu. İlişkiler (relationships) hatalı kurulduğu için raporlar çok yavaştı.",
          solution: "Veri ambarı mantığıyla 'Star Schema' mimarisi kuruldu. Fact ve Dimension tabloları ayrıştırıldı. Gereksiz sütunlar temizlenerek veri boyutu küçültüldü ve DAX ölçümleri (measures) optimize edildi.",
          outcome: "Tek bir doğruluk kaynağı (Single Source of Truth) oluşturuldu. Çapraz departman raporları saniyeler içinde alınır hale geldi ve veri tutarlılığı %100 sağlandı."
        },
        { 
          title: "CRM Veri Konsolidasyonu", 
          desc: "Farklı kaynaklardan (CRM, ERP, Excel) gelen müşteri verilerinin tek bir veritabanında temizlenmesi, birleştirilmesi ve raporlanabilir hale getirilmesi.",
          challenge: "Satış ekibi müşteri geçmişini görmek için 3 farklı sisteme bakmak zorundaydı. Mükerrer kayıtlar ve eksik veriler pazarlama kampanyalarının başarısını düşürüyordu.",
          solution: "SQL tabanlı bir ara katman oluşturularak veriler temizlendi (Data Cleansing) ve tekilleştirildi. Eksik veriler zenginleştirildi. Temiz veri seti Power BI ve Excel ile entegre edildi.",
          outcome: "Satış ekibinin verimliliği %25 arttı. Müşteri memnuniyeti skoru yükseldi ve pazarlama kampanyalarının dönüşüm oranı 2 katına çıktı."
        }
      ],
      details: 'Detaylı İncele'
    },
    training: {
      subtitle: 'AKADEMİ',
      title: 'Eğitim Videoları',
      description: 'Excel, Power BI ve Veri Analizi konularında yeteneklerinizi geliştirmek için hazırladığımız ücretsiz video içerikler.',
      watchNow: 'İzle',
      level: 'Seviye',
      duration: 'Süre',
      beginner: 'Başlangıç',
      intermediate: 'Orta',
      advanced: 'İleri',
      videos: [
        {
          title: 'Excel Pivot Tablo Uzmanlığı',
          desc: 'Verilerinizi saniyeler içinde özetleyin ve analiz edin. Pivot tabloların bilinmeyen özellikleri.',
          duration: '12 dk'
        },
        {
          title: 'Power BI: DAX Formüllerine Giriş',
          desc: 'CALCULATE, FILTER ve ALL fonksiyonlarının mantığını öğrenerek dinamik raporlar oluşturun.',
          duration: '18 dk'
        },
        {
          title: 'VBA Makrolar ile Tek Tuşla Otomasyon',
          desc: 'Tekrarlayan işlerinizi nasıl otomatize edersiniz? İlk makronuzu yazın.',
          duration: '15 dk'
        }
      ]
    },
    contact: {
      title: 'İletişime Geçin',
      description: 'Sorularınız veya randevu talepleriniz için aşağıdaki formu doldurabilirsiniz.',
      phone: 'Telefon',
      email: 'E-posta',
      office: 'Ofis',
      officeAddress: 'İstanbul/Beylikdüzü',
      faqTitle: 'Sıkça Sorulan Sorular',
      faq1q: 'İlk görüşme ücretsiz mi?',
      faq1a: 'Evet, 30 dakikalık tanışma toplantısı ücretsizdir.',
      faq2q: 'Online görüşme yapıyor musunuz?',
      faq2a: 'Tüm hizmetlerimi Zoom veya Google Meet üzerinden de vermekteyim.',
      form: {
        name: 'Ad Soyad',
        namePh: 'Adınız Soyadınız',
        email: 'E-posta',
        emailPh: 'ornek@email.com',
        subject: 'Konu',
        subjectPh: 'Danışmanlık Talebi',
        message: 'Mesajınız',
        messagePh: 'Size nasıl yardımcı olabilirim?',
        send: 'Gönder',
        sending: 'Gönderiliyor...',
        success: 'Mesaj Gönderildi'
      }
    },
    chat: {
        welcome: 'Merhaba! Ben DataVera Asistanı. Size hizmetlerimiz hakkında nasıl yardımcı olabilirim? Örneğin, "n8n otomasyonu nedir?" veya "Veri modelleme nasıl yapılır?" diye sorabilirsiniz.',
        placeholder: 'Bir soru sorun...',
        poweredBy: 'Gemini AI tarafından desteklenmektedir',
        header: 'Akıllı Asistan',
        online: 'Çevrimiçi'
    },
    footer: {
        desc: 'Excel, Power BI ve Office çözümleriyle verilerinizi güce dönüştürüyoruz.',
        quickLinks: 'Hızlı Bağlantılar',
        solutions: 'Çözümler',
        follow: 'Takip Edin',
        rights: 'Tüm hakları saklıdır.',
        backToTop: 'Başa Dön',
        solutionItems: ['Power BI Raporlama', 'Excel Otomasyon', 'Veri Analizi', 'Kurumsal Eğitim']
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      ai_automation: 'AI & Automation',
      training: 'Training',
      contact: 'Contact',
      getQuote: 'Get Quote'
    },
    hero: {
      subtitle: 'EXCEL & POWER BI SOLUTIONS',
      title: 'Transform Data into',
      titleHighlight: 'Power',
      titleSuffix: '',
      description: 'Don\'t get lost in complex Excel sheets. Create dynamic reports with Power BI, automate your processes, and grow your business with data-driven decisions.',
      cta: 'Free Analysis',
      services: 'Our Services',
      automation: 'Data Automation'
    },
    about: {
      title: 'About Me',
      description: 'Hello, I am your Data Solutions Expert. I have been playing an active role in data management, reporting, and automation processes of corporate companies for years. I combine my deep technical knowledge of Excel and Power BI with the practical needs of the business world to offer you custom solutions.',
      specialtiesTitle: 'Specialties',
      specialties: 'Advanced Excel, VBA, Power BI (DAX & M Query), SQL, Office 365',
      approachTitle: 'My Approach',
      approach: 'Transforming complex data into simple and effective visuals that everyone can understand.',
      goal: 'My goal is to minimize your manual workload and ensure you make the most accurate strategic decisions from your data.'
    },
    services: {
      subtitle: 'OUR SERVICES',
      title: 'Data Driven Solutions',
      description: 'Accelerate your business digital transformation with our Excel and Power BI expertise.',
      items: [
         { title: 'Power BI Reporting', desc: 'Visualize your data. Track your company performance instantly with interactive dashboards.' },
         { title: 'Advanced Excel', desc: 'Custom Excel solutions that reduce manual workload with complex formulas, VBA macros, and Pivot tables.' },
         { title: 'Data Analysis', desc: 'We clean, organize, and transform your scattered data into insights that enable strategic decision-making.' },
         { title: 'Office Automation', desc: 'We save you time by automating processes between Outlook, Word, and Excel.' },
         { title: 'Database Management', desc: 'Keep your data safe and accessible with SQL and Access-based solutions.' },
         { title: 'Corporate Training', desc: 'Excel and Power BI training programs for your team from beginner to advanced levels.' }
      ]
    },
    aiAutomation: {
        subtitle: 'FUTURE TECH',
        title: 'AI & Workflow Automation',
        description: 'Go beyond ordinary data analysis. Connect workflows with n8n and maximize efficiency with LLM-powered smart assistants.',
        workflowTitle: 'n8n Workflows',
        workflowDesc: 'We design no-code/low-code automation processes that connect your Excel, Gmail, Slack, and CRM systems.',
        chatbotTitle: 'AI Chatbots',
        chatbotDesc: 'Smart assistants trained on your internal company documents that can answer questions and perform tasks.',
        analysisTitle: 'Smart Analysis',
        analysisDesc: 'We analyze big data sets with AI to reveal trends that the human eye might miss.',
        cta: 'Discover Automation'
    },
    portfolio: {
      subtitle: 'TESTIMONIALS',
      title: 'Sample Projects',
      description: 'Selected works on how we digitize business processes and increase efficiency.',
      cta: 'Let\'s bring your project to life.',
      ctaButton: 'Get a Project Quote',
      modal: {
        challenge: 'Challenge & Need',
        solution: 'Our Solution',
        outcome: 'The Outcome',
        close: 'Close'
      },
      items: [
        { 
          title: "Corporate Sales Dashboard", 
          desc: "Interactive Power BI report providing instant sales, stock, and profitability tracking for a multi-branch retail chain.",
          challenge: "Data from the client's 50+ branches was scattered, and preparing daily reports took 3-4 hours every morning. High stock costs were incurred due to lack of instant tracking.",
          solution: "All data sources (ERP, Excel, SQL) were unified into a single data model using Power Query. Summary dashboards for executives and detailed ones for branch managers were designed in Power BI. Data refresh was fully automated.",
          outcome: "Reporting time reduced to 'zero' (real-time data). Stock costs decreased by 15%, and strategic decisions accelerated with branch-based profitability analysis."
        },
        { 
          title: "Automated Stock Tracking System", 
          desc: "Excel-based stock management interface with barcode reader integration and automatic order alerts for small-scale production facilities.",
          challenge: "Stock entries/exits on the production floor were recorded on paper. Manual data entry caused errors, and production halted when critical raw materials ran out.",
          solution: "A user-friendly interface (UserForm) was developed using Excel VBA. Barcode reader integration was provided. An automatic email alert system was set up for products falling below critical stock levels.",
          outcome: "Data entry errors decreased by 90%. Production stoppages ended, and the annual stock counting time dropped from 2 days to 4 hours."
        },
        { 
          title: "Enterprise Data Modeling", 
          desc: "Unifying cross-departmental data (Sales, HR, Finance) into a centralized data warehouse model and making it reportable.",
          challenge: "Company data was held in isolated silos. Sales and Finance reports did not match, and cross-departmental KPI tracking was impossible. Incorrect relationships caused very slow reports.",
          solution: "A 'Star Schema' architecture was established with data warehousing logic. Fact and Dimension tables were separated. Unnecessary columns were removed to reduce data size, and DAX measures were optimized.",
          outcome: "A Single Source of Truth was created. Cross-department reports are now generated in seconds, and 100% data consistency was achieved."
        },
        { 
          title: "CRM Data Consolidation", 
          desc: "Cleaning, merging, and making reportable customer data from different sources (CRM, ERP, Excel) in a single database.",
          challenge: "The sales team had to check 3 different systems to see customer history. Duplicate records and missing data reduced the success of marketing campaigns.",
          solution: "Data was cleaned (Data Cleansing) and deduplicated by creating a SQL-based middleware. Missing data was enriched. The clean data set was integrated with Power BI and Excel.",
          outcome: "Sales team efficiency increased by 25%. Customer satisfaction scores rose, and the conversion rate of marketing campaigns doubled."
        }
      ],
      details: 'View Details'
    },
    training: {
      subtitle: 'ACADEMY',
      title: 'Training Videos',
      description: 'Free video content we prepared to improve your skills in Excel, Power BI, and Data Analysis.',
      watchNow: 'Watch Now',
      level: 'Level',
      duration: 'Duration',
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced',
      videos: [
        {
          title: 'Excel Pivot Table Mastery',
          desc: 'Summarize and analyze your data in seconds. Unknown features of Pivot tables.',
          duration: '12 min'
        },
        {
          title: 'Power BI: Intro to DAX',
          desc: 'Create dynamic reports by learning the logic of CALCULATE, FILTER, and ALL functions.',
          duration: '18 min'
        },
        {
          title: 'One-Click Automation with VBA',
          desc: 'How to automate repetitive tasks? Write your first macro.',
          duration: '15 min'
        }
      ]
    },
    contact: {
      title: 'Get in Touch',
      description: 'You can fill out the form below for your questions or appointment requests.',
      phone: 'Phone',
      email: 'Email',
      office: 'Office',
      officeAddress: 'Levent, Buyukdere Cd. No:193\n34394 Sisli/Istanbul',
      faqTitle: 'Frequently Asked Questions',
      faq1q: 'Is the first consultation free?',
      faq1a: 'Yes, the 30-minute introductory meeting is free.',
      faq2q: 'Do you offer online meetings?',
      faq2a: 'I provide all my services via Zoom or Google Meet as well.',
      form: {
        name: 'Name Surname',
        namePh: 'Your Name',
        email: 'Email',
        emailPh: 'example@email.com',
        subject: 'Subject',
        subjectPh: 'Consultancy Request',
        message: 'Message',
        messagePh: 'How can I help you?',
        send: 'Send',
        sending: 'Sending...',
        success: 'Message Sent'
      }
    },
    chat: {
        welcome: 'Hello! I am the DataVera Assistant. How can I help you with our services? For example, you can ask "What is n8n automation?" or "How is data modeling done?".',
        placeholder: 'Ask a question...',
        poweredBy: 'Powered by Gemini AI',
        header: 'Smart Assistant',
        online: 'Online'
    },
    footer: {
        desc: 'Transforming your data into power with Excel, Power BI, and Office solutions.',
        quickLinks: 'Quick Links',
        solutions: 'Solutions',
        follow: 'Follow Us',
        rights: 'All rights reserved.',
        backToTop: 'Back to Top',
        solutionItems: ['Power BI Reporting', 'Excel Automation', 'Data Analysis', 'Corporate Training']
    }
  }
};
