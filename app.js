const STORAGE_KEY = "archivethread-uae-designs";
const BULK_STORAGE_KEY = "archivethread-uae-bulk-discounts";
const CURRENCY_STORAGE_KEY = "archivethread-uae-currency";
const LANGUAGE_STORAGE_KEY = "archivethread-worldwide-language";
const currencyOptions = {
  AED: { locale: "en-AE", label: "UAE dirham" },
  USD: { locale: "en-US", label: "US dollar" },
  EUR: { locale: "en-IE", label: "Euro" },
  GBP: { locale: "en-GB", label: "British pound" },
  PHP: { locale: "en-PH", label: "Philippine peso" },
  INR: { locale: "en-IN", label: "Indian rupee" },
  RUB: { locale: "ru-RU", label: "Russian ruble" },
  SAR: { locale: "en-SA", label: "Saudi riyal" }
};
const languageOptions = {
  en: { label: "English", locale: "en-US", dir: "ltr" },
  es: { label: "Español", locale: "es-ES", dir: "ltr" },
  fr: { label: "Français", locale: "fr-FR", dir: "ltr" },
  ar: { label: "العربية", locale: "ar-EG-u-nu-arab", dir: "rtl" },
  hi: { label: "हिन्दी", locale: "hi-IN-u-nu-deva", dir: "ltr" },
  zh: { label: "中文", locale: "zh-CN", dir: "ltr" },
  ru: { label: "Русский", locale: "ru-RU", dir: "ltr" },
  fil: { label: "Filipino", locale: "fil-PH", dir: "ltr" }
};
const translations = {
  en: {
    appTitle: "ArchiveThread Worldwide | Archive Souvenir Shirt Calculator",
    brandName: "ArchiveThread Worldwide",
    brandSubtitle: "Global souvenir pricing",
    savedDesignsLabel: "Saved shirt designs",
    searchSavedDesigns: "Search saved designs",
    searchLibrary: "Search library",
    filterByMethod: "Filter by printing method",
    allMethods: "All methods",
    headline: "Archive souvenir shirt calculator",
    intro: "Estimate costs for archive-quality souvenir shirt production anywhere in the world.",
    language: "Language",
    currency: "Currency",
    exportPdf: "Export PDF",
    exportExcel: "Export Excel",
    new: "New",
    singleDesign: "Single Design",
    compareDesigns: "Compare Designs",
    designDetails: "Design details",
    designDetailsDescription: "Build the production cost from blank shirt through packed sale.",
    newDesign: "New design",
    editingSavedDesign: "Editing saved design",
    archivePrint: "GLOBAL<br />ARCHIVE",
    designName: "Design name",
    colorway: "Colorway",
    mockupLayout: "Mockup layout",
    shirtPhotos: "Shirt photos",
    shirtPhotosDescription: "Upload up to five views for product inspection.",
    front: "Front",
    back: "Back",
    left: "Left side",
    right: "Right side",
    detail: "Detail",
    view360: "360 view",
    zoomIn: "Zoom in",
    zoomOut: "Zoom out",
    resetZoom: "Reset zoom",
    noPhoto: "Upload a shirt photo",
    gender: "Gender",
    man: "Man",
    woman: "Woman",
    age: "Age",
    adult: "Adult",
    kids: "Kids",
    printingMethod: "Printing method",
    totalQuantity: "Total quantity",
    averageBlankCost: "Average blank cost",
    averagePrintCost: "Average print cost",
    printSetupFee: "Print setup fee",
    averagePackaging: "Average packaging",
    averageLabelTag: "Average label / tag",
    averageLabor: "Average labor",
    computedOverhead: "Computed overhead per shirt",
    desiredMargin: "Desired margin",
    sizeQuantities: "Size quantities and blank costs",
    sizeQuantitiesDescription: "Set different quantities and shirt blank prices for each required size.",
    total: "total",
    size: "Size",
    qty: "Qty",
    blank: "Blank",
    print: "Print",
    packaging: "Packaging",
    label: "Label",
    labor: "Labor",
    overheadBreakdown: "Overhead cost breakdown",
    overheadDescription: "Enter batch costs once; the app divides them across S, M, and L quantities.",
    licenseTradePermit: "License / trade permit",
    designPermit: "Design permit / archive rights",
    labelTagsBatch: "Label tags batch cost",
    deliveryCharges: "Delivery charges",
    otherOverhead: "Other overhead",
    otherOverheadDetails: "Other overhead details",
    otherOverheadPlaceholder: "e.g. rush fee, storage, special trim",
    bulkDiscounts: "Bulk pricing discounts",
    bulkDescription: "Discounts are applied to cost per shirt before margin and tax.",
    active: "active",
    addTax: "Add VAT / sales tax 5% to shelf price",
    applyPreset: "Apply method preset",
    saveDesign: "Save design",
    duplicate: "Duplicate",
    priceRecommendation: "Price recommendation",
    allFiguresUse: "All figures use {currency} ({currencyName}).",
    suggestedSellingPrice: "Suggested selling price",
    taxIncludedNote: "Includes 5% VAT / sales tax. Minimum premium shelf price is {price}.",
    taxExcludedNote: "VAT / sales tax excluded. Minimum premium shelf price is {price}.",
    bulkDiscount: "Bulk discount",
    totalProductionCost: "Total production cost",
    costPerShirt: "Cost per shirt",
    grossProfit: "Gross profit / shirt",
    margin: "Margin",
    costMix: "Cost mix",
    totalCost: "Total cost",
    compareSavedDesigns: "Compare saved designs",
    compareDescription: "Review production cost, bulk discount, margin, and suggested price across your library.",
    design: "Design",
    specs: "Specs",
    discount: "Discount",
    sellingPrice: "Selling price",
    noSavedFilter: "No saved shirts match this filter.",
    noSavedDesigns: "No saved designs yet.",
    duplicateDesign: "Duplicate design",
    deleteDesign: "Delete design",
    units: "units",
    unitsPlus: "{min}+ units",
    unitRange: "{min}-{max} units",
    pcs: "pcs",
    untitled: "Untitled souvenir shirt",
    customColorway: "Custom colorway",
    blankShirtsBySize: "Blank shirts by size",
    printingBySize: "Printing by size",
    setup: "Setup",
    packagingBySize: "Packaging by size",
    labelBySize: "Label / tag by size",
    laborBySize: "Labor by size",
    labelTagsBatchShort: "Label tags batch",
    otherOverheadShort: "Other overhead",
    excelExported: "Excel file exported.",
    allowPopups: "Allow popups to export PDF.",
    designSaved: "Design saved to library.",
    designDuplicated: "Design duplicated.",
    designDeleted: "Design deleted.",
    presetApplied: "Printing preset applied.",
    mockupUploaded: "Mockup layout uploaded.",
    currencyChanged: "Currency changed to {currency}.",
    languageChanged: "Language changed to {language}.",
    quoteTitle: "Premium Archive Souvenir Shirt Quote",
    sizeBreakdown: "Size Breakdown",
    costBreakdown: "Cost Breakdown",
    item: "Item",
    generated: "Generated {date} for ArchiveThread Worldwide.",
    averageCostIncluding: "Average cost {cost} including shared costs",
    quoteSummary: "Cost per shirt: {cost} · Bulk discount: {discount} · Gross profit per shirt: {profit} · Margin: {margin}",
    excelFileName: "ArchiveThread-worldwide-shirt-pricing-{stamp}.xls"
  }
};

translations.es = {
  ...translations.en,
  brandSubtitle: "Precios globales de recuerdos",
  searchLibrary: "Buscar biblioteca",
  allMethods: "Todos los métodos",
  headline: "Calculadora mundial de camisetas souvenir de archivo",
  intro: "Estima costos de producción de camisetas souvenir de calidad de archivo en cualquier lugar del mundo.",
  language: "Idioma",
  currency: "Moneda",
  exportPdf: "Exportar PDF",
  exportExcel: "Exportar Excel",
  new: "Nuevo",
  singleDesign: "Diseño individual",
  compareDesigns: "Comparar diseños",
  designDetails: "Detalles del diseño",
  newDesign: "Nuevo diseño",
  editingSavedDesign: "Editando diseño guardado",
  designName: "Nombre del diseño",
  colorway: "Combinación de color",
  mockupLayout: "Mockup",
  gender: "Género",
  man: "Hombre",
  woman: "Mujer",
  age: "Edad",
  adult: "Adulto",
  kids: "Niños",
  printingMethod: "Método de impresión",
  totalQuantity: "Cantidad total",
  desiredMargin: "Margen deseado",
  total: "total",
  size: "Talla",
  qty: "Cant.",
  blank: "Base",
  print: "Impresión",
  packaging: "Empaque",
  label: "Etiqueta",
  labor: "Mano de obra",
  active: "activo",
  addTax: "Añadir IVA / impuesto 5% al precio",
  applyPreset: "Aplicar preajuste",
  saveDesign: "Guardar diseño",
  duplicate: "Duplicar",
  priceRecommendation: "Recomendación de precio",
  suggestedSellingPrice: "Precio de venta sugerido",
  bulkDiscount: "Descuento por volumen",
  totalProductionCost: "Costo total de producción",
  costPerShirt: "Costo por camiseta",
  grossProfit: "Ganancia / camiseta",
  margin: "Margen",
  costMix: "Mezcla de costos",
  compareSavedDesigns: "Comparar diseños guardados",
  design: "Diseño",
  specs: "Especificaciones",
  discount: "Descuento",
  sellingPrice: "Precio de venta",
  pcs: "uds.",
  units: "unidades",
  excelExported: "Archivo Excel exportado.",
  allowPopups: "Permite ventanas emergentes para exportar PDF.",
  designSaved: "Diseño guardado en la biblioteca.",
  designDuplicated: "Diseño duplicado.",
  designDeleted: "Diseño eliminado.",
  presetApplied: "Preajuste de impresión aplicado.",
  mockupUploaded: "Mockup cargado.",
  currencyChanged: "Moneda cambiada a {currency}.",
  languageChanged: "Idioma cambiado a {language}.",
  quoteTitle: "Cotización premium de camiseta souvenir de archivo",
  sizeBreakdown: "Desglose por tallas",
  costBreakdown: "Desglose de costos",
  item: "Artículo"
};

translations.fr = {
  ...translations.en,
  brandSubtitle: "Tarification souvenir mondiale",
  searchLibrary: "Rechercher",
  allMethods: "Toutes méthodes",
  headline: "Calculateur mondial de chemises souvenir d'archive",
  intro: "Estimez les coûts de production de chemises souvenir de qualité archive partout dans le monde.",
  language: "Langue",
  currency: "Devise",
  exportPdf: "Exporter PDF",
  exportExcel: "Exporter Excel",
  new: "Nouveau",
  singleDesign: "Un design",
  compareDesigns: "Comparer",
  designDetails: "Détails du design",
  newDesign: "Nouveau design",
  editingSavedDesign: "Design enregistré",
  designName: "Nom du design",
  colorway: "Coloris",
  gender: "Genre",
  man: "Homme",
  woman: "Femme",
  age: "Âge",
  adult: "Adulte",
  kids: "Enfants",
  printingMethod: "Méthode d'impression",
  totalQuantity: "Quantité totale",
  desiredMargin: "Marge souhaitée",
  total: "total",
  size: "Taille",
  qty: "Qté",
  blank: "Vierge",
  print: "Impression",
  packaging: "Emballage",
  label: "Étiquette",
  labor: "Main-d'oeuvre",
  active: "actif",
  addTax: "Ajouter TVA / taxe 5% au prix",
  applyPreset: "Appliquer le préréglage",
  saveDesign: "Enregistrer",
  duplicate: "Dupliquer",
  priceRecommendation: "Recommandation de prix",
  suggestedSellingPrice: "Prix de vente suggéré",
  bulkDiscount: "Remise volume",
  totalProductionCost: "Coût total de production",
  costPerShirt: "Coût par chemise",
  grossProfit: "Profit / chemise",
  margin: "Marge",
  costMix: "Répartition des coûts",
  compareSavedDesigns: "Comparer les designs",
  design: "Design",
  specs: "Specs",
  discount: "Remise",
  sellingPrice: "Prix de vente",
  pcs: "pcs",
  units: "unités",
  excelExported: "Fichier Excel exporté.",
  allowPopups: "Autorisez les fenêtres pop-up pour exporter le PDF.",
  designSaved: "Design enregistré.",
  designDuplicated: "Design dupliqué.",
  designDeleted: "Design supprimé.",
  presetApplied: "Préréglage appliqué.",
  mockupUploaded: "Mockup importé.",
  currencyChanged: "Devise changée en {currency}.",
  languageChanged: "Langue changée en {language}.",
  quoteTitle: "Devis premium de chemise souvenir d'archive",
  sizeBreakdown: "Détail des tailles",
  costBreakdown: "Détail des coûts",
  item: "Article"
};

translations.ar = {
  ...translations.en,
  brandSubtitle: "تسعير عالمي للهدايا التذكارية",
  searchLibrary: "ابحث في المكتبة",
  allMethods: "كل الطرق",
  headline: "حاسبة عالمية لقمصان التذكارات الأرشيفية",
  intro: "احسب تكاليف إنتاج قمصان تذكارية بجودة أرشيفية في أي مكان في العالم.",
  language: "اللغة",
  currency: "العملة",
  exportPdf: "تصدير PDF",
  exportExcel: "تصدير Excel",
  new: "جديد",
  singleDesign: "تصميم واحد",
  compareDesigns: "مقارنة التصاميم",
  designDetails: "تفاصيل التصميم",
  newDesign: "تصميم جديد",
  editingSavedDesign: "تحرير تصميم محفوظ",
  designName: "اسم التصميم",
  colorway: "الألوان",
  mockupLayout: "النموذج",
  gender: "الجنس",
  man: "رجل",
  woman: "امرأة",
  age: "العمر",
  adult: "بالغ",
  kids: "أطفال",
  printingMethod: "طريقة الطباعة",
  totalQuantity: "الكمية الإجمالية",
  desiredMargin: "الهامش المطلوب",
  total: "الإجمالي",
  size: "المقاس",
  qty: "الكمية",
  blank: "القميص",
  print: "الطباعة",
  packaging: "التغليف",
  label: "الملصق",
  labor: "العمل",
  active: "نشط",
  addTax: "إضافة ضريبة ٥٪ إلى سعر البيع",
  applyPreset: "تطبيق الإعداد",
  saveDesign: "حفظ التصميم",
  duplicate: "نسخ",
  priceRecommendation: "توصية السعر",
  suggestedSellingPrice: "سعر البيع المقترح",
  bulkDiscount: "خصم الكمية",
  totalProductionCost: "إجمالي تكلفة الإنتاج",
  costPerShirt: "التكلفة لكل قميص",
  grossProfit: "الربح لكل قميص",
  margin: "الهامش",
  costMix: "مزيج التكلفة",
  compareSavedDesigns: "مقارنة التصاميم المحفوظة",
  design: "التصميم",
  specs: "المواصفات",
  discount: "الخصم",
  sellingPrice: "سعر البيع",
  pcs: "قطعة",
  units: "وحدة",
  excelExported: "تم تصدير ملف Excel.",
  allowPopups: "اسمح بالنوافذ المنبثقة لتصدير PDF.",
  designSaved: "تم حفظ التصميم.",
  designDuplicated: "تم نسخ التصميم.",
  designDeleted: "تم حذف التصميم.",
  presetApplied: "تم تطبيق إعداد الطباعة.",
  mockupUploaded: "تم رفع النموذج.",
  currencyChanged: "تم تغيير العملة إلى {currency}.",
  languageChanged: "تم تغيير اللغة إلى {language}.",
  quoteTitle: "عرض سعر لقميص تذكاري أرشيفي فاخر",
  sizeBreakdown: "تفصيل المقاسات",
  costBreakdown: "تفصيل التكاليف",
  item: "البند"
};

translations.hi = {
  ...translations.en,
  brandSubtitle: "वैश्विक स्मारिका मूल्य निर्धारण",
  searchLibrary: "लाइब्रेरी खोजें",
  allMethods: "सभी तरीके",
  headline: "विश्वव्यापी आर्काइव स्मारिका शर्ट कैलकुलेटर",
  intro: "दुनिया में कहीं भी आर्काइव-क्वालिटी स्मारिका शर्ट उत्पादन की लागत का अनुमान लगाएं.",
  language: "भाषा",
  currency: "मुद्रा",
  exportPdf: "PDF निर्यात",
  exportExcel: "Excel निर्यात",
  new: "नया",
  singleDesign: "एक डिजाइन",
  compareDesigns: "डिजाइन तुलना",
  designDetails: "डिजाइन विवरण",
  newDesign: "नया डिजाइन",
  editingSavedDesign: "सहेजा डिजाइन संपादित",
  designName: "डिजाइन नाम",
  colorway: "रंग संयोजन",
  gender: "लिंग",
  man: "पुरुष",
  woman: "महिला",
  age: "आयु",
  adult: "वयस्क",
  kids: "बच्चे",
  printingMethod: "प्रिंटिंग तरीका",
  totalQuantity: "कुल मात्रा",
  desiredMargin: "वांछित मार्जिन",
  total: "कुल",
  size: "साइज",
  qty: "मात्रा",
  blank: "ब्लैंक",
  print: "प्रिंट",
  packaging: "पैकेजिंग",
  label: "लेबल",
  labor: "श्रम",
  active: "सक्रिय",
  addTax: "शेल्फ मूल्य में 5% VAT / बिक्री कर जोड़ें",
  applyPreset: "प्रीसेट लगाएं",
  saveDesign: "डिजाइन सहेजें",
  duplicate: "डुप्लिकेट",
  priceRecommendation: "मूल्य सुझाव",
  suggestedSellingPrice: "सुझाया बिक्री मूल्य",
  bulkDiscount: "थोक छूट",
  totalProductionCost: "कुल उत्पादन लागत",
  costPerShirt: "प्रति शर्ट लागत",
  grossProfit: "प्रति शर्ट लाभ",
  margin: "मार्जिन",
  costMix: "लागत मिश्रण",
  compareSavedDesigns: "सहेजे डिजाइन तुलना",
  design: "डिजाइन",
  specs: "विवरण",
  discount: "छूट",
  sellingPrice: "बिक्री मूल्य",
  pcs: "पीस",
  units: "इकाइयां",
  excelExported: "Excel फ़ाइल निर्यात हुई.",
  allowPopups: "PDF निर्यात के लिए पॉपअप अनुमति दें.",
  designSaved: "डिजाइन लाइब्रेरी में सहेजा गया.",
  designDuplicated: "डिजाइन डुप्लिकेट हुआ.",
  designDeleted: "डिजाइन हटाया गया.",
  presetApplied: "प्रिंटिंग प्रीसेट लगाया गया.",
  mockupUploaded: "Mockup अपलोड हुआ.",
  currencyChanged: "मुद्रा {currency} में बदली.",
  languageChanged: "भाषा {language} में बदली.",
  quoteTitle: "प्रीमियम आर्काइव स्मारिका शर्ट कोट",
  sizeBreakdown: "साइज विवरण",
  costBreakdown: "लागत विवरण",
  item: "आइटम"
};

translations.zh = {
  ...translations.en,
  brandSubtitle: "全球纪念品定价",
  searchLibrary: "搜索资料库",
  allMethods: "所有工艺",
  headline: "全球档案纪念衫计算器",
  intro: "估算世界各地档案品质纪念衫的生产成本。",
  language: "语言",
  currency: "货币",
  exportPdf: "导出 PDF",
  exportExcel: "导出 Excel",
  new: "新建",
  singleDesign: "单个设计",
  compareDesigns: "比较设计",
  designDetails: "设计详情",
  newDesign: "新设计",
  editingSavedDesign: "编辑已保存设计",
  designName: "设计名称",
  colorway: "配色",
  gender: "性别",
  man: "男",
  woman: "女",
  age: "年龄",
  adult: "成人",
  kids: "儿童",
  printingMethod: "印刷方式",
  totalQuantity: "总数量",
  desiredMargin: "目标利润率",
  total: "合计",
  size: "尺码",
  qty: "数量",
  blank: "空白衫",
  print: "印刷",
  packaging: "包装",
  label: "标签",
  labor: "人工",
  active: "生效",
  addTax: "加入 5% VAT / 销售税",
  applyPreset: "应用预设",
  saveDesign: "保存设计",
  duplicate: "复制",
  priceRecommendation: "价格建议",
  suggestedSellingPrice: "建议售价",
  bulkDiscount: "批量折扣",
  totalProductionCost: "总生产成本",
  costPerShirt: "每件成本",
  grossProfit: "每件毛利",
  margin: "利润率",
  costMix: "成本构成",
  compareSavedDesigns: "比较已保存设计",
  design: "设计",
  specs: "规格",
  discount: "折扣",
  sellingPrice: "售价",
  pcs: "件",
  units: "件",
  excelExported: "Excel 文件已导出。",
  allowPopups: "请允许弹窗以导出 PDF。",
  designSaved: "设计已保存。",
  designDuplicated: "设计已复制。",
  designDeleted: "设计已删除。",
  presetApplied: "印刷预设已应用。",
  mockupUploaded: "Mockup 已上传。",
  currencyChanged: "货币已切换为 {currency}。",
  languageChanged: "语言已切换为 {language}。",
  quoteTitle: "高级档案纪念衫报价",
  sizeBreakdown: "尺码明细",
  costBreakdown: "成本明细",
  item: "项目"
};

translations.fil = {
  ...translations.en,
  brandSubtitle: "Pandaigdigang presyo ng souvenir",
  searchLibrary: "Hanapin sa library",
  allMethods: "Lahat ng paraan",
  headline: "Worldwide archive souvenir shirt calculator",
  intro: "Tantiyahin ang gastos sa paggawa ng archive-quality souvenir shirts saanman sa mundo.",
  language: "Wika",
  currency: "Currency",
  exportPdf: "I-export PDF",
  exportExcel: "I-export Excel",
  new: "Bago",
  singleDesign: "Isang Design",
  compareDesigns: "Ikumpara",
  designDetails: "Detalye ng design",
  newDesign: "Bagong design",
  editingSavedDesign: "Ina-edit ang saved design",
  designName: "Pangalan ng design",
  colorway: "Colorway",
  gender: "Kasarian",
  man: "Lalaki",
  woman: "Babae",
  age: "Edad",
  adult: "Adult",
  kids: "Kids",
  printingMethod: "Paraan ng print",
  totalQuantity: "Kabuuang dami",
  desiredMargin: "Target margin",
  total: "total",
  size: "Size",
  qty: "Qty",
  blank: "Blank",
  print: "Print",
  packaging: "Packaging",
  label: "Label",
  labor: "Labor",
  active: "active",
  addTax: "Magdagdag ng 5% VAT / sales tax sa shelf price",
  applyPreset: "Apply preset",
  saveDesign: "I-save design",
  duplicate: "Duplicate",
  priceRecommendation: "Presyo recommendation",
  suggestedSellingPrice: "Suggested selling price",
  bulkDiscount: "Bulk discount",
  totalProductionCost: "Total production cost",
  costPerShirt: "Cost per shirt",
  grossProfit: "Gross profit / shirt",
  margin: "Margin",
  costMix: "Cost mix",
  compareSavedDesigns: "Ikumpara saved designs",
  design: "Design",
  specs: "Specs",
  discount: "Discount",
  sellingPrice: "Selling price",
  pcs: "pcs",
  units: "units",
  excelExported: "Na-export ang Excel file.",
  allowPopups: "Payagan ang popups para mag-export ng PDF.",
  designSaved: "Na-save ang design sa library.",
  designDuplicated: "Na-duplicate ang design.",
  designDeleted: "Na-delete ang design.",
  presetApplied: "Na-apply ang printing preset.",
  mockupUploaded: "Na-upload ang mockup.",
  currencyChanged: "Currency changed to {currency}.",
  languageChanged: "Wika changed to {language}.",
  quoteTitle: "Premium Archive Souvenir Shirt Quote",
  sizeBreakdown: "Size Breakdown",
  costBreakdown: "Cost Breakdown",
  item: "Item"
};

translations.ru = {
  ...translations.en,
  brandSubtitle: "Глобальный расчет сувенирной продукции",
  searchLibrary: "Поиск в библиотеке",
  allMethods: "Все методы",
  headline: "Мировой калькулятор архивных сувенирных футболок",
  intro: "Рассчитайте стоимость производства сувенирных футболок архивного качества в любой стране.",
  language: "Язык",
  currency: "Валюта",
  exportPdf: "Экспорт PDF",
  exportExcel: "Экспорт Excel",
  new: "Новый",
  singleDesign: "Один дизайн",
  compareDesigns: "Сравнить",
  designDetails: "Детали дизайна",
  newDesign: "Новый дизайн",
  editingSavedDesign: "Редактирование дизайна",
  designName: "Название дизайна",
  colorway: "Цветовое решение",
  shirtPhotos: "Фото футболки",
  shirtPhotosDescription: "Загрузите до пяти ракурсов для проверки товара.",
  front: "Спереди",
  back: "Сзади",
  left: "Левый бок",
  right: "Правый бок",
  detail: "Деталь",
  view360: "Обзор 360",
  zoomIn: "Увеличить",
  zoomOut: "Уменьшить",
  resetZoom: "Сбросить масштаб",
  noPhoto: "Загрузите фото футболки",
  gender: "Пол",
  man: "Мужчина",
  woman: "Женщина",
  age: "Возраст",
  adult: "Взрослый",
  kids: "Дети",
  printingMethod: "Метод печати",
  totalQuantity: "Общее количество",
  averageBlankCost: "Средняя цена основы",
  averagePrintCost: "Средняя цена печати",
  printSetupFee: "Настройка печати",
  averagePackaging: "Средняя упаковка",
  averageLabelTag: "Средняя бирка / ярлык",
  averageLabor: "Средняя работа",
  computedOverhead: "Накладные на футболку",
  desiredMargin: "Желаемая маржа",
  sizeQuantities: "Количество и стоимость по размерам",
  sizeQuantitiesDescription: "Укажите количество и цену основы для каждого нужного размера.",
  total: "итого",
  size: "Размер",
  qty: "Кол-во",
  blank: "Основа",
  print: "Печать",
  packaging: "Упаковка",
  label: "Бирка",
  labor: "Работа",
  overheadBreakdown: "Разбивка накладных расходов",
  overheadDescription: "Введите расходы партии один раз; приложение распределит их по количеству S, M и L.",
  licenseTradePermit: "Лицензия / разрешение",
  designPermit: "Права на дизайн / архив",
  labelTagsBatch: "Партия бирок",
  deliveryCharges: "Доставка",
  otherOverhead: "Прочие накладные",
  otherOverheadDetails: "Описание прочих накладных",
  otherOverheadPlaceholder: "например: срочность, хранение, спец. фурнитура",
  bulkDiscounts: "Скидки за объем",
  bulkDescription: "Скидки применяются к себестоимости до маржи и налога.",
  active: "активно",
  addTax: "Добавить НДС / налог с продаж 5% к цене",
  applyPreset: "Применить пресет",
  saveDesign: "Сохранить",
  duplicate: "Дублировать",
  priceRecommendation: "Рекомендация цены",
  allFiguresUse: "Все суммы указаны в {currency} ({currencyName}).",
  suggestedSellingPrice: "Рекомендуемая цена",
  taxIncludedNote: "Включает 5% НДС / налог с продаж. Минимальная премиальная цена: {price}.",
  taxExcludedNote: "НДС / налог с продаж не включен. Минимальная премиальная цена: {price}.",
  bulkDiscount: "Скидка за объем",
  totalProductionCost: "Общая стоимость производства",
  costPerShirt: "Себестоимость за футболку",
  grossProfit: "Валовая прибыль / футболка",
  margin: "Маржа",
  costMix: "Структура затрат",
  totalCost: "Общая стоимость",
  compareSavedDesigns: "Сравнить сохраненные дизайны",
  compareDescription: "Сравните себестоимость, скидку, маржу и рекомендуемую цену по библиотеке.",
  design: "Дизайн",
  specs: "Характеристики",
  discount: "Скидка",
  sellingPrice: "Цена продажи",
  noSavedFilter: "Нет сохраненных футболок по этому фильтру.",
  noSavedDesigns: "Сохраненных дизайнов пока нет.",
  duplicateDesign: "Дублировать дизайн",
  deleteDesign: "Удалить дизайн",
  units: "шт.",
  unitsPlus: "{min}+ шт.",
  unitRange: "{min}-{max} шт.",
  pcs: "шт.",
  untitled: "Безымянная сувенирная футболка",
  customColorway: "Своя цветовая схема",
  blankShirtsBySize: "Основы по размерам",
  printingBySize: "Печать по размерам",
  setup: "Настройка",
  packagingBySize: "Упаковка по размерам",
  labelBySize: "Бирки по размерам",
  laborBySize: "Работа по размерам",
  labelTagsBatchShort: "Партия бирок",
  otherOverheadShort: "Прочие накладные",
  excelExported: "Файл Excel экспортирован.",
  allowPopups: "Разрешите всплывающие окна для экспорта PDF.",
  designSaved: "Дизайн сохранен в библиотеке.",
  designDuplicated: "Дизайн продублирован.",
  designDeleted: "Дизайн удален.",
  presetApplied: "Пресет печати применен.",
  mockupUploaded: "Фото загружено.",
  currencyChanged: "Валюта изменена на {currency}.",
  languageChanged: "Язык изменен на {language}.",
  quoteTitle: "Премиальное предложение по архивной сувенирной футболке",
  sizeBreakdown: "Разбивка по размерам",
  costBreakdown: "Разбивка затрат",
  item: "Позиция",
  generated: "Создано {date} для ArchiveThread Worldwide.",
  averageCostIncluding: "Средняя стоимость {cost} с учетом общих расходов",
  quoteSummary: "Себестоимость: {cost} · Скидка за объем: {discount} · Валовая прибыль: {profit} · Маржа: {margin}"
};

const methodPresets = {
  DTF: { printCost: 35, setupFee: 85, color: "#2563eb" },
  DTG: { printCost: 35, setupFee: 55, color: "#1e40af" },
  "Silk Screen": { printCost: 35, setupFee: 220, color: "#0f172a" }
};

const MIN_SELLING_PRICE = 250;
const shirtViewKeys = ["front", "back", "left", "right", "detail"];
const defaultBulkDiscounts = [
  { minQty: 1, maxQty: 24, discountPercent: 0 },
  { minQty: 25, maxQty: 49, discountPercent: 3 },
  { minQty: 50, maxQty: 99, discountPercent: 6 },
  { minQty: 100, maxQty: 999999, discountPercent: 10 }
];

const seedDesigns = [
  {
    id: crypto.randomUUID(),
    designName: "Dubai Creek Heritage Tee",
    colorway: "Sand / Deep Green",
    gender: "Man",
    ageGroup: "Adult",
    method: "DTF",
    sizeS: 15,
    sizeM: 20,
    sizeL: 15,
    sizeSCost: 25,
    sizeMCost: 28,
    sizeLCost: 31,
    sizeSPrint: 10,
    sizeMPrint: 12,
    sizeLPrint: 14,
    sizeSPackaging: 1.5,
    sizeMPackaging: 2,
    sizeLPackaging: 2.5,
    sizeSLabel: 0.5,
    sizeMLabel: 0.5,
    sizeLLabel: 0.5,
    sizeSLabor: 1.5,
    sizeMLabor: 2,
    sizeLLabor: 2.5,
    quantity: 50,
    blankCost: 28,
    printCost: 35,
    setupFee: 85,
    packaging: 4.5,
    labelCost: 2.25,
    laborCost: 6,
    overhead: 3.5,
    overheadLicense: 60,
    overheadDesignPermit: 45,
    overheadLabelsTags: 50,
    overheadDelivery: 40,
    overheadOther: 20,
    overheadOtherDetails: "Special handling and storage",
    margin: 55,
    vatEnabled: true,
    mockupImage: "",
    shirtImages: { front: "", back: "", left: "", right: "", detail: "" }
  },
  {
    id: crypto.randomUUID(),
    designName: "Al Fahidi Archive Shirt",
    colorway: "Ivory / Museum Black",
    gender: "Woman",
    ageGroup: "Adult",
    method: "DTG",
    sizeS: 10,
    sizeM: 15,
    sizeL: 10,
    sizeSCost: 25,
    sizeMCost: 28,
    sizeLCost: 31,
    sizeSPrint: 10,
    sizeMPrint: 12,
    sizeLPrint: 14,
    sizeSPackaging: 1.5,
    sizeMPackaging: 2,
    sizeLPackaging: 2.5,
    sizeSLabel: 0.5,
    sizeMLabel: 0.5,
    sizeLLabel: 0.5,
    sizeSLabor: 1.5,
    sizeMLabor: 2,
    sizeLLabor: 2.5,
    quantity: 35,
    blankCost: 28,
    printCost: 35,
    setupFee: 55,
    packaging: 5,
    labelCost: 2.5,
    laborCost: 6.5,
    overhead: 4,
    overheadLicense: 50,
    overheadDesignPermit: 45,
    overheadLabelsTags: 30,
    overheadDelivery: 35,
    overheadOther: 15,
    overheadOtherDetails: "Market display handling",
    margin: 58,
    vatEnabled: true,
    mockupImage: "",
    shirtImages: { front: "", back: "", left: "", right: "", detail: "" }
  },
  {
    id: crypto.randomUUID(),
    designName: "Souk Stamp Limited Run",
    colorway: "White / Flag Red",
    gender: "Man",
    ageGroup: "Kids",
    method: "Silk Screen",
    sizeS: 40,
    sizeM: 50,
    sizeL: 30,
    sizeSCost: 22,
    sizeMCost: 25,
    sizeLCost: 28,
    sizeSPrint: 10,
    sizeMPrint: 12,
    sizeLPrint: 14,
    sizeSPackaging: 1.5,
    sizeMPackaging: 2,
    sizeLPackaging: 2.5,
    sizeSLabel: 0.5,
    sizeMLabel: 0.5,
    sizeLLabel: 0.5,
    sizeSLabor: 1.5,
    sizeMLabor: 2,
    sizeLLabor: 2.5,
    quantity: 120,
    blankCost: 25.17,
    printCost: 35,
    setupFee: 220,
    packaging: 4,
    labelCost: 2,
    laborCost: 5,
    overhead: 3,
    overheadLicense: 95,
    overheadDesignPermit: 80,
    overheadLabelsTags: 140,
    overheadDelivery: 70,
    overheadOther: 45,
    overheadOtherDetails: "Limited run setup supplies",
    margin: 52,
    vatEnabled: true,
    mockupImage: "",
    shirtImages: { front: "", back: "", left: "", right: "", detail: "" }
  }
];

const fields = [
  "designName",
  "colorway",
  "gender",
  "ageGroup",
  "method",
  "sizeS",
  "sizeM",
  "sizeL",
  "sizeSCost",
  "sizeMCost",
  "sizeLCost",
  "sizeSPrint",
  "sizeMPrint",
  "sizeLPrint",
  "sizeSPackaging",
  "sizeMPackaging",
  "sizeLPackaging",
  "sizeSLabel",
  "sizeMLabel",
  "sizeLLabel",
  "sizeSLabor",
  "sizeMLabor",
  "sizeLLabor",
  "quantity",
  "blankCost",
  "printCost",
  "setupFee",
  "packaging",
  "labelCost",
  "laborCost",
  "overhead",
  "overheadLicense",
  "overheadDesignPermit",
  "overheadLabelsTags",
  "overheadDelivery",
  "overheadOther",
  "overheadOtherDetails",
  "margin",
  "vatEnabled",
  "mockupImage"
];

const form = document.querySelector("#calculatorForm");
const libraryList = document.querySelector("#libraryList");
const searchInput = document.querySelector("#librarySearch");
const methodFilter = document.querySelector("#methodFilter");
const marginOutput = document.querySelector("#marginOutput");
const toast = document.querySelector("#toast");

let designs = loadDesigns();
let bulkDiscounts = loadBulkDiscounts();
let activeCurrency = loadCurrency();
let activeLanguage = loadLanguage();
let activeId = designs[0]?.id || null;
let currentMockupImage = designs[0]?.mockupImage || "";
let currentShirtImages = normalizeShirtImages(designs[0]);
let activeShirtView = "front";
let viewerZoom = 1;
let spinTimer = null;
let activeView = "single";

function loadLanguage() {
  const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return languageOptions[saved] ? saved : "en";
}

function persistLanguage() {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, activeLanguage);
}

function locale() {
  return languageOptions[activeLanguage]?.locale || languageOptions.en.locale;
}

function direction() {
  return languageOptions[activeLanguage]?.dir || "ltr";
}

function t(key, values = {}) {
  const phrase = translations[activeLanguage]?.[key] ?? translations.en[key] ?? key;
  return Object.entries(values).reduce((text, [name, value]) => text.replaceAll(`{${name}}`, value), phrase);
}

function number(value, options = {}) {
  return new Intl.NumberFormat(locale(), options).format(value);
}

function percent(value) {
  return `${number(value)}%`;
}

function localizedDate(value = new Date()) {
  return new Intl.DateTimeFormat(locale(), {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(value);
}

function displayGender(value) {
  return value === "Woman" ? t("woman") : t("man");
}

function displayAge(value) {
  return value === "Kids" ? t("kids") : t("adult");
}

function loadCurrency() {
  const saved = localStorage.getItem(CURRENCY_STORAGE_KEY);
  return currencyOptions[saved] ? saved : "AED";
}

function persistCurrency() {
  localStorage.setItem(CURRENCY_STORAGE_KEY, activeCurrency);
}

function money(value) {
  const currency = currencyOptions[activeCurrency] ? activeCurrency : "AED";
  return new Intl.NumberFormat(locale(), {
    style: "currency",
    currency,
    minimumFractionDigits: 2
  }).format(value);
}

function currencyName() {
  return currencyOptions[activeCurrency]?.label || currencyOptions.AED.label;
}

function setText(selector, key, values = {}) {
  const element = document.querySelector(selector);
  if (element) element.textContent = t(key, values);
}

function setHtml(selector, key, values = {}) {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = t(key, values);
}

function setButtonText(selector, key) {
  const button = document.querySelector(selector);
  if (!button) return;
  const textNode = Array.from(button.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
  if (textNode) {
    textNode.textContent = ` ${t(key)}`;
  } else {
    button.append(` ${t(key)}`);
  }
}

function setLabelPrefix(selector, key) {
  const label = document.querySelector(selector);
  if (!label) return;
  const textNode = Array.from(label.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
  if (textNode) textNode.textContent = t(key);
}

function setOptionText(selector, value, key) {
  const option = document.querySelector(`${selector} option[value="${value}"]`);
  if (option) option.textContent = t(key);
}

function applyTranslations() {
  const language = languageOptions[activeLanguage] || languageOptions.en;
  document.documentElement.lang = activeLanguage;
  document.documentElement.dir = direction();
  document.title = t("appTitle");
  document.querySelector("#languageSelect").value = activeLanguage;
  document.querySelector("#currencySelect").value = activeCurrency;

  document.querySelector(".library-panel")?.setAttribute("aria-label", t("savedDesignsLabel"));
  document.querySelector("#librarySearch")?.setAttribute("placeholder", t("searchLibrary"));
  document.querySelector("#methodFilter")?.setAttribute("aria-label", t("filterByMethod"));
  document.querySelector("#singleView")?.setAttribute("aria-label", t("singleDesign"));
  document.querySelector("#compareView")?.setAttribute("aria-label", t("compareSavedDesigns"));

  setText(".brand-name", "brandName");
  setText(".brand-subtitle", "brandSubtitle");
  setText(".topbar h1", "headline");
  setText(".topbar p", "intro");
  setText(".language-control span", "language");
  setText(".currency-control span", "currency");
  setButtonText("#exportPdfButton", "exportPdf");
  setButtonText("#exportExcelButton", "exportExcel");
  setButtonText("#newDesignButton", "new");
  setText("#singleViewButton", "singleDesign");
  setText("#compareViewButton", "compareDesigns");
  setText("#calculatorForm > .section-heading h2", "designDetails");
  setText("#calculatorForm > .section-heading p", "designDetailsDescription");
  setHtml(".archive-print", "archivePrint");
  setText('label[for="designName"]', "designName");
  setText('label[for="colorway"]', "colorway");
  setText(".photo-upload-panel h3", "shirtPhotos");
  setText(".photo-upload-panel p", "shirtPhotosDescription");
  setLabelPrefix('label[for="frontUpload"]', "front");
  setLabelPrefix('label[for="backUpload"]', "back");
  setLabelPrefix('label[for="leftUpload"]', "left");
  setLabelPrefix('label[for="rightUpload"]', "right");
  setLabelPrefix('label[for="detailUpload"]', "detail");
  setText('label[for="gender"]', "gender");
  setText('label[for="ageGroup"]', "age");
  setText(".method-group > label", "printingMethod");
  setText('label[for="quantity"]', "totalQuantity");
  setText('label[for="blankCost"]', "averageBlankCost");
  setText('label[for="printCost"]', "averagePrintCost");
  setText('label[for="setupFee"]', "printSetupFee");
  setText('label[for="packaging"]', "averagePackaging");
  setText('label[for="labelCost"]', "averageLabelTag");
  setText('label[for="laborCost"]', "averageLabor");
  setText('label[for="overhead"]', "computedOverhead");
  setText('label[for="margin"]', "desiredMargin");
  const panels = document.querySelectorAll(".subsection-panel");
  if (panels[0]) {
    panels[0].querySelector("h3").textContent = t("sizeQuantities");
    panels[0].querySelector("p").textContent = t("sizeQuantitiesDescription");
  }
  if (panels[1]) {
    panels[1].querySelector("h3").textContent = t("overheadBreakdown");
    panels[1].querySelector("p").textContent = t("overheadDescription");
  }
  setText('label[for="overheadLicense"]', "licenseTradePermit");
  setText('label[for="overheadDesignPermit"]', "designPermit");
  setText('label[for="overheadLabelsTags"]', "labelTagsBatch");
  setText('label[for="overheadDelivery"]', "deliveryCharges");
  setText('label[for="overheadOther"]', "otherOverhead");
  setText('label[for="overheadOtherDetails"]', "otherOverheadDetails");
  document.querySelector("#overheadOtherDetails")?.setAttribute("placeholder", t("otherOverheadPlaceholder"));
  if (panels[2]) {
    panels[2].querySelector("h3").textContent = t("bulkDiscounts");
    panels[2].querySelector("p").textContent = t("bulkDescription");
  }
  const toggle = document.querySelector(".toggle");
  if (toggle) {
    const textNode = Array.from(toggle.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
    if (textNode) textNode.textContent = ` ${t("addTax")}`;
  }
  setText("#applyPresetButton", "applyPreset");
  setButtonText("#saveButton", "saveDesign");
  setButtonText("#duplicateButton", "duplicate");
  setText(".summary-panel .section-heading h2", "priceRecommendation");
  setText(".hero-metric span", "suggestedSellingPrice");
  setText(".metric-grid div:nth-child(1) span", "bulkDiscount");
  setText(".metric-grid div:nth-child(2) span", "totalProductionCost");
  setText(".metric-grid div:nth-child(3) span", "costPerShirt");
  setText(".metric-grid div:nth-child(4) span", "grossProfit");
  setText(".metric-grid div:nth-child(5) span", "margin");
  setText(".breakdown h3", "costMix");
  setText("#compareView .section-heading h2", "compareSavedDesigns");
  setText("#compareView .section-heading p", "compareDescription");

  const headers = document.querySelectorAll(".compare-table th");
  ["design", "specs", "qty", "costPerShirt", "discount", "sellingPrice", "margin"].forEach((key, index) => {
    if (headers[index]) headers[index].textContent = t(key);
  });

  setOptionText("#methodFilter", "All", "allMethods");
  setOptionText("#gender", "Man", "man");
  setOptionText("#gender", "Woman", "woman");
  setOptionText("#ageGroup", "Adult", "adult");
  setOptionText("#ageGroup", "Kids", "kids");

  document.querySelectorAll(".mini-grid label").forEach((label) => {
    const input = label.querySelector("input");
    if (!input) return;
    const key = input.id.includes("Cost") ? "blank" : input.id.includes("Print") ? "print" : input.id.includes("Packaging") ? "packaging" : input.id.includes("Label") ? "label" : input.id.includes("Labor") ? "labor" : "qty";
    const textNode = Array.from(label.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
    if (textNode) textNode.textContent = t(key);
  });

  document.body.style.direction = language.dir;
}

function normalizeShirtImages(design = {}) {
  const images = design.shirtImages && typeof design.shirtImages === "object" ? design.shirtImages : {};
  return shirtViewKeys.reduce((next, key) => {
    next[key] = images[key] || (key === "front" ? design.mockupImage || "" : "");
    return next;
  }, {});
}

function stopSpin() {
  if (!spinTimer) return;
  clearInterval(spinTimer);
  spinTimer = null;
  document.querySelector("#spinViewButton")?.classList.remove("active");
}

function loadDesigns() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return seedDesigns;

  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) && parsed.length ? parsed : seedDesigns;
  } catch {
    return seedDesigns;
  }
}

function persistDesigns() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(designs));
}

function loadBulkDiscounts() {
  const saved = localStorage.getItem(BULK_STORAGE_KEY);
  if (!saved) return defaultBulkDiscounts;

  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) && parsed.length ? parsed : defaultBulkDiscounts;
  } catch {
    return defaultBulkDiscounts;
  }
}

function persistBulkDiscounts() {
  localStorage.setItem(BULK_STORAGE_KEY, JSON.stringify(bulkDiscounts));
}

function numericValue(id) {
  const value = Number(document.querySelector(`#${id}`).value);
  return Number.isFinite(value) ? value : 0;
}

function designNumber(design, key, fallback = 0) {
  const value = Number(design[key]);
  return Number.isFinite(value) ? value : fallback;
}

function designText(design, key, fallback = "") {
  return String(design[key] ?? fallback).trim();
}

function getSizeQuantityFromInputs() {
  return Math.max(1, Math.round(numericValue("sizeS") + numericValue("sizeM") + numericValue("sizeL")));
}

function getSizeRows(design) {
  return [
    buildSizeRow(design, "S"),
    buildSizeRow(design, "M"),
    buildSizeRow(design, "L")
  ];
}

function buildSizeRow(design, size) {
  const prefix = `size${size}`;
  const fallbackBlank = designNumber(design, "blankCost");
  const fallbackPrint = designNumber(design, "printCost");
  const fallbackPackaging = designNumber(design, "packaging");
  const fallbackLabel = designNumber(design, "labelCost");
  const fallbackLabor = designNumber(design, "laborCost");
  const quantity = designNumber(design, prefix);
  const blank = designNumber(design, `${prefix}Cost`, fallbackBlank);
  const print = designNumber(design, `${prefix}Print`, fallbackPrint);
  const packaging = designNumber(design, `${prefix}Packaging`, fallbackPackaging);
  const label = designNumber(design, `${prefix}Label`, fallbackLabel);
  const labor = designNumber(design, `${prefix}Labor`, fallbackLabor);
  const unitCost = blank + print + packaging + label + labor;

  return { size, quantity, blank, print, packaging, label, labor, unitCost, total: unitCost * quantity };
}

function getWeightedAverage(design, key) {
  const rows = getSizeRows(design);
  const quantity = rows.reduce((sum, row) => sum + row.quantity, 0) || 1;
  return rows.reduce((sum, row) => sum + row.quantity * row[key], 0) / quantity;
}

function getSizeCostTotal(design, key = "total") {
  return getSizeRows(design).reduce((sum, row) => sum + row[key] * (key === "total" ? 1 : row.quantity), 0);
}

function getOverheadTotal(design) {
  return (
    designNumber(design, "overheadLicense") +
    designNumber(design, "overheadDesignPermit") +
    designNumber(design, "overheadLabelsTags") +
    designNumber(design, "overheadDelivery") +
    designNumber(design, "overheadOther")
  );
}

function getBulkDiscount(quantity) {
  const tier = bulkDiscounts.find((item) => quantity >= item.minQty && quantity <= item.maxQty);
  return tier ? designNumber(tier, "discountPercent") : 0;
}

function getFormData() {
  const quantity = getSizeQuantityFromInputs();
  const sizeData = {
    sizeS: Math.max(0, Math.round(numericValue("sizeS"))),
    sizeM: Math.max(0, Math.round(numericValue("sizeM"))),
    sizeL: Math.max(0, Math.round(numericValue("sizeL"))),
    sizeSCost: numericValue("sizeSCost"),
    sizeMCost: numericValue("sizeMCost"),
    sizeLCost: numericValue("sizeLCost"),
    sizeSPrint: numericValue("sizeSPrint"),
    sizeMPrint: numericValue("sizeMPrint"),
    sizeLPrint: numericValue("sizeLPrint"),
    sizeSPackaging: numericValue("sizeSPackaging"),
    sizeMPackaging: numericValue("sizeMPackaging"),
    sizeLPackaging: numericValue("sizeLPackaging"),
    sizeSLabel: numericValue("sizeSLabel"),
    sizeMLabel: numericValue("sizeMLabel"),
    sizeLLabel: numericValue("sizeLLabel"),
    sizeSLabor: numericValue("sizeSLabor"),
    sizeMLabor: numericValue("sizeMLabor"),
    sizeLLabor: numericValue("sizeLLabor")
  };
  const averageBlankCost = getWeightedAverage(sizeData, "blank");
  const averagePrintCost = getWeightedAverage(sizeData, "print");
  const averagePackaging = getWeightedAverage(sizeData, "packaging");
  const averageLabel = getWeightedAverage(sizeData, "label");
  const averageLabor = getWeightedAverage(sizeData, "labor");
  const overheadTotal = getOverheadTotal({
    overheadLicense: numericValue("overheadLicense"),
    overheadDesignPermit: numericValue("overheadDesignPermit"),
    overheadLabelsTags: numericValue("overheadLabelsTags"),
    overheadDelivery: numericValue("overheadDelivery"),
    overheadOther: numericValue("overheadOther")
  });
  const overheadOtherDetails = document.querySelector("#overheadOtherDetails").value.trim();

  return {
    id: activeId || crypto.randomUUID(),
    designName: document.querySelector("#designName").value.trim() || t("untitled"),
    colorway: document.querySelector("#colorway").value.trim() || t("customColorway"),
    gender: document.querySelector("#gender").value,
    ageGroup: document.querySelector("#ageGroup").value,
    method: document.querySelector("#method").value,
    ...sizeData,
    quantity,
    blankCost: averageBlankCost,
    printCost: averagePrintCost,
    setupFee: numericValue("setupFee"),
    packaging: averagePackaging,
    labelCost: averageLabel,
    laborCost: averageLabor,
    overhead: overheadTotal / quantity,
    overheadLicense: numericValue("overheadLicense"),
    overheadDesignPermit: numericValue("overheadDesignPermit"),
    overheadLabelsTags: numericValue("overheadLabelsTags"),
    overheadDelivery: numericValue("overheadDelivery"),
    overheadOther: numericValue("overheadOther"),
    overheadOtherDetails,
    margin: numericValue("margin"),
    vatEnabled: document.querySelector("#vatEnabled").checked,
    mockupImage: currentShirtImages.front || currentMockupImage,
    shirtImages: { ...currentShirtImages }
  };
}

function calculate(design) {
  const quantity = Math.max(1, designNumber(design, "quantity", 1));
  const sizeProductionTotal = getSizeCostTotal(design);
  const averageBlankCost = getWeightedAverage(design, "blank");
  const averagePrintCost = getWeightedAverage(design, "print");
  const averagePackaging = getWeightedAverage(design, "packaging");
  const averageLabel = getWeightedAverage(design, "label");
  const averageLabor = getWeightedAverage(design, "labor");
  const overheadTotal = getOverheadTotal(design) || designNumber(design, "overhead") * quantity;
  const overheadPerShirt = overheadTotal / quantity;
  const productionCost = sizeProductionTotal + designNumber(design, "setupFee") + overheadTotal;
  const unitCost = productionCost / quantity;
  const bulkDiscount = getBulkDiscount(quantity);
  const discountedUnitCost = unitCost * (1 - bulkDiscount / 100);
  const targetMargin = Math.min(designNumber(design, "margin"), 95) / 100;
  const preVatPrice = discountedUnitCost / (1 - targetMargin);
  const calculatedShelfPrice = design.vatEnabled ? preVatPrice * 1.05 : preVatPrice;
  const sellingPrice = Math.max(MIN_SELLING_PRICE, calculatedShelfPrice);
  const revenueExVat = design.vatEnabled ? sellingPrice / 1.05 : sellingPrice;
  const grossProfit = revenueExVat - discountedUnitCost;
  const actualMargin = revenueExVat ? (grossProfit / revenueExVat) * 100 : 0;

  return {
    variableUnitCost: sizeProductionTotal / quantity,
    productionCost,
    unitCost,
    sizeProductionTotal,
    discountedUnitCost,
    bulkDiscount,
    overheadTotal,
    overheadPerShirt,
    preVatPrice,
    sellingPrice,
    calculatedShelfPrice,
    grossProfit,
    actualMargin,
    breakdown: [
      [t("blankShirtsBySize"), averageBlankCost * quantity],
      [t("printingBySize"), averagePrintCost * quantity],
      [t("setup"), designNumber(design, "setupFee")],
      [t("packagingBySize"), averagePackaging * quantity],
      [t("labelBySize"), averageLabel * quantity],
      [t("laborBySize"), averageLabor * quantity],
      [t("licenseTradePermit"), designNumber(design, "overheadLicense")],
      [t("designPermit"), designNumber(design, "overheadDesignPermit")],
      [t("labelTagsBatchShort"), designNumber(design, "overheadLabelsTags")],
      [t("deliveryCharges"), designNumber(design, "overheadDelivery")],
      [designText(design, "overheadOtherDetails") || t("otherOverheadShort"), designNumber(design, "overheadOther")]
    ]
  };
}

function setFormData(design) {
  const nextDesign = normalizeDesign(design);
  currentShirtImages = normalizeShirtImages(nextDesign);
  currentMockupImage = currentShirtImages.front || nextDesign.mockupImage || "";
  activeShirtView = shirtViewKeys.find((key) => currentShirtImages[key]) || "front";
  viewerZoom = 1;
  stopSpin();
  fields.forEach((field) => {
    if (field === "mockupImage") return;
    const input = document.querySelector(`#${field}`);
    if (!input) return;
    if (input.type === "checkbox") {
      input.checked = Boolean(nextDesign[field]);
    } else {
      input.value = nextDesign[field];
    }
  });
  activeId = nextDesign.id;
  updateUI();
}

function normalizeDesign(design) {
  const sizeS = designNumber(design, "sizeS", Math.max(0, Math.round(designNumber(design, "quantity", 1) * 0.3)));
  const sizeM = designNumber(design, "sizeM", Math.max(0, Math.round(designNumber(design, "quantity", 1) * 0.4)));
  const sizeL = designNumber(design, "sizeL", Math.max(0, designNumber(design, "quantity", 1) - sizeS - sizeM));
  const quantity = Math.max(1, Math.round(sizeS + sizeM + sizeL));
  const fallbackBlankCost = designNumber(design, "blankCost", 25);
  const sizeSCost = designNumber(design, "sizeSCost", fallbackBlankCost);
  const sizeMCost = designNumber(design, "sizeMCost", fallbackBlankCost);
  const sizeLCost = designNumber(design, "sizeLCost", fallbackBlankCost);
  const sizeSPrint = designNumber(design, "sizeSPrint", designNumber(design, "printCost", 35));
  const sizeMPrint = designNumber(design, "sizeMPrint", designNumber(design, "printCost", 35));
  const sizeLPrint = designNumber(design, "sizeLPrint", designNumber(design, "printCost", 35));
  const sizeSPackaging = designNumber(design, "sizeSPackaging", designNumber(design, "packaging", 0));
  const sizeMPackaging = designNumber(design, "sizeMPackaging", designNumber(design, "packaging", 0));
  const sizeLPackaging = designNumber(design, "sizeLPackaging", designNumber(design, "packaging", 0));
  const sizeSLabel = designNumber(design, "sizeSLabel", designNumber(design, "labelCost", 0));
  const sizeMLabel = designNumber(design, "sizeMLabel", designNumber(design, "labelCost", 0));
  const sizeLLabel = designNumber(design, "sizeLLabel", designNumber(design, "labelCost", 0));
  const sizeSLabor = designNumber(design, "sizeSLabor", designNumber(design, "laborCost", 0));
  const sizeMLabor = designNumber(design, "sizeMLabor", designNumber(design, "laborCost", 0));
  const sizeLLabor = designNumber(design, "sizeLLabor", designNumber(design, "laborCost", 0));
  const normalizedSizeData = { sizeS, sizeM, sizeL, sizeSCost, sizeMCost, sizeLCost, sizeSPrint, sizeMPrint, sizeLPrint, sizeSPackaging, sizeMPackaging, sizeLPackaging, sizeSLabel, sizeMLabel, sizeLLabel, sizeSLabor, sizeMLabor, sizeLLabor };
  const overheadTotal =
    getOverheadTotal(design) || designNumber(design, "overhead") * Math.max(1, designNumber(design, "quantity", quantity));

  return {
    ...seedDesigns[0],
    ...design,
    gender: design.gender || "Man",
    ageGroup: design.ageGroup || "Adult",
    sizeS,
    sizeM,
    sizeL,
    sizeSCost,
    sizeMCost,
    sizeLCost,
    sizeSPrint,
    sizeMPrint,
    sizeLPrint,
    sizeSPackaging,
    sizeMPackaging,
    sizeLPackaging,
    sizeSLabel,
    sizeMLabel,
    sizeLLabel,
    sizeSLabor,
    sizeMLabor,
    sizeLLabor,
    quantity,
    blankCost: getWeightedAverage(normalizedSizeData, "blank"),
    printCost: getWeightedAverage(normalizedSizeData, "print"),
    packaging: getWeightedAverage(normalizedSizeData, "packaging"),
    labelCost: getWeightedAverage(normalizedSizeData, "label"),
    laborCost: getWeightedAverage(normalizedSizeData, "labor"),
    overheadLicense: designNumber(design, "overheadLicense", overheadTotal),
    overheadDesignPermit: designNumber(design, "overheadDesignPermit", 0),
    overheadLabelsTags: designNumber(design, "overheadLabelsTags", 0),
    overheadDelivery: designNumber(design, "overheadDelivery", 0),
    overheadOther: designNumber(design, "overheadOther", 0),
    overheadOtherDetails: designText(design, "overheadOtherDetails"),
    overhead: overheadTotal / quantity,
    shirtImages: normalizeShirtImages(design),
    mockupImage: normalizeShirtImages(design).front
  };
}

function updateUI() {
  const design = getFormData();
  const result = calculate(design);
  const methodColor = methodPresets[design.method]?.color || "#2563eb";
  const mockupPreview = document.querySelector("#mockupPreview");

  applyTranslations();
  document.querySelector("#currencySelect").value = activeCurrency;
  document.querySelector("#languageSelect").value = activeLanguage;
  document.querySelector("#currencyNote").textContent = t("allFiguresUse", { currency: activeCurrency, currencyName: currencyName() });
  marginOutput.value = percent(design.margin);
  document.querySelector("#quantity").value = design.quantity;
  document.querySelector("#blankCost").value = getWeightedAverage(design, "blank").toFixed(2);
  document.querySelector("#printCost").value = getWeightedAverage(design, "print").toFixed(2);
  document.querySelector("#packaging").value = getWeightedAverage(design, "packaging").toFixed(2);
  document.querySelector("#labelCost").value = getWeightedAverage(design, "label").toFixed(2);
  document.querySelector("#laborCost").value = getWeightedAverage(design, "labor").toFixed(2);
  document.querySelector("#blankTotal").textContent = `${money(result.sizeProductionTotal)} ${t("total")}`;
  getSizeRows(design).forEach((row) => {
    document.querySelector(`#size${row.size}Total`).textContent = money(row.total);
  });
  document.querySelector("#overhead").value = result.overheadPerShirt.toFixed(2);
  document.querySelector("#overheadTotal").textContent = `${money(result.overheadTotal)} ${t("total")}`;
  document.querySelector("#bulkDiscount").textContent = percent(result.bulkDiscount);
  document.querySelector("#activeBulkDiscount").textContent = `${percent(result.bulkDiscount)} ${t("active")}`;
  document.querySelector("#editingStatus").textContent = activeId ? t("editingSavedDesign") : t("newDesign");
  document.querySelector("#shirtPreview").style.setProperty("--print-color", methodColor);
  document.querySelectorAll("[data-method-option]").forEach((button) => {
    button.classList.toggle("active", button.dataset.methodOption === design.method);
  });
  const selectedImage = currentShirtImages[activeShirtView] || shirtViewKeys.map((key) => currentShirtImages[key]).find(Boolean) || "";
  mockupPreview.src = selectedImage;
  mockupPreview.alt = selectedImage ? `${t(activeShirtView)} ${t("shirtPhotos")}` : t("noPhoto");
  mockupPreview.hidden = !selectedImage;
  document.querySelector("#shirtPreview").style.setProperty("--zoom", viewerZoom.toFixed(2));
  document.querySelector("#resetZoomButton").textContent = `${Math.round(viewerZoom * 100)}%`;
  document.querySelectorAll("[data-shirt-view]").forEach((button) => {
    const view = button.dataset.shirtView;
    button.textContent = t(view);
    button.classList.toggle("active", view === activeShirtView);
  });
  setText("#zoomOutButton", "zoomOut");
  setText("#zoomInButton", "zoomIn");
  document.querySelector("#spinViewButton").textContent = t("view360");
  document.querySelector("#spinViewButton").classList.toggle("active", Boolean(spinTimer));
  document.querySelector("#sellingPrice").textContent = money(result.sellingPrice);
  document.querySelector("#vatNote").textContent = design.vatEnabled
    ? t("taxIncludedNote", { price: money(MIN_SELLING_PRICE) })
    : t("taxExcludedNote", { price: money(MIN_SELLING_PRICE) });
  document.querySelector("#totalCost").textContent = money(result.productionCost);
  document.querySelector("#unitCost").textContent = money(result.unitCost);
  document.querySelector("#grossProfit").textContent = money(result.grossProfit);
  document.querySelector("#actualMargin").textContent = percent(Math.round(result.actualMargin));

  renderBreakdown(result);
  renderBulkDiscounts();
  renderLibrary();
  renderCompareRows();
  updateView();
}

function renderBulkDiscounts() {
  document.querySelector("#bulkDiscountRows").innerHTML = bulkDiscounts
    .map((tier, index) => {
      const label = tier.maxQty >= 999999
        ? t("unitsPlus", { min: number(tier.minQty) })
        : t("unitRange", { min: number(tier.minQty), max: number(tier.maxQty) });
      return `
        <label class="bulk-row">
          <span>${label}</span>
          <input type="number" min="0" max="50" step="0.5" value="${tier.discountPercent}" data-index="${index}" aria-label="Discount for ${label}" />
          <strong>%</strong>
        </label>
      `;
    })
    .join("");
}

function renderBreakdown(result) {
  const total = result.breakdown.reduce((sum, [, value]) => sum + value, 0) || 1;
  const colors = ["#5c95ff", "#ff3c38", "#ecc30b", "#191923", "#7fb7ff", "#ff8a86", "#f2d85a", "#5a5a6a", "#9fc5ff", "#ffd95a"];
  let cursor = 0;
  const slices = result.breakdown.map(([label, value], index) => {
    const start = cursor;
    const percent = (value / total) * 100;
    cursor += percent;
    return {
      label,
      value,
      percent,
      color: colors[index % colors.length],
      start,
      end: cursor
    };
  });
  const gradient = slices
    .map((slice) => `${slice.color} ${slice.start.toFixed(2)}% ${slice.end.toFixed(2)}%`)
    .join(", ");

  document.querySelector("#breakdownRows").innerHTML = `
    <div class="pie-chart-wrap">
      <div class="pie-chart" style="--pie:${gradient}" role="img" aria-label="Cost mix pie chart">
        <span>${money(total)}</span>
        <small>${t("totalCost")}</small>
      </div>
      <div class="pie-legend">
        ${slices
          .map(
            (slice) => `
              <div class="pie-legend-row">
                <span class="pie-key" style="background:${slice.color}"></span>
                <span class="pie-label">${slice.label}</span>
                <strong>${money(slice.value)}</strong>
                <small>${Math.round(slice.percent)}%</small>
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderLibrary() {
  const search = searchInput.value.trim().toLowerCase();
  const method = methodFilter.value;
  const filtered = designs.filter((design) => {
    const matchesSearch = `${design.designName} ${design.colorway}`.toLowerCase().includes(search);
    const matchesMethod = method === "All" || design.method === method;
    return matchesSearch && matchesMethod;
  });

  libraryList.innerHTML = filtered.length
    ? filtered.map(renderLibraryItem).join("")
    : `<div class="empty-state">${t("noSavedFilter")}</div>`;
}

function renderLibraryItem(design) {
  const result = calculate(design);
  const activeClass = design.id === activeId ? "active" : "";
  const color = methodPresets[design.method]?.color || "#2563eb";
  const images = normalizeShirtImages(design);
  const thumbnail = images.front || shirtViewKeys.map((key) => images[key]).find(Boolean);
  const thumb = thumbnail
    ? `<img class="mini-mockup" src="${thumbnail}" alt="" />`
    : `<span class="mini-shirt" style="--print-color:${color}"></span>`;
  return `
    <article class="library-item ${activeClass}" data-id="${design.id}">
      <button class="library-select" type="button" data-action="select" data-id="${design.id}">
        ${thumb}
        <span>
          <strong>${design.designName}</strong>
          <small>${design.method} &middot; ${displayAge(design.ageGroup)} &middot; ${displayGender(design.gender)} &middot; ${number(design.quantity)} ${t("pcs")} &middot; ${money(result.sellingPrice)}</small>
        </span>
      </button>
      <div class="library-actions">
        <button type="button" title="${t("duplicateDesign")}" data-action="copy" data-id="${design.id}">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M8 8h11v11H8z" /><path d="M5 16H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1" /></svg>
        </button>
        <button type="button" title="${t("deleteDesign")}" data-action="delete" data-id="${design.id}">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M3 6h18M8 6V4h8v2m-9 0 1 15h8l1-15" /></svg>
        </button>
      </div>
    </article>
  `;
}

function renderCompareRows() {
  const rows = designs.map((design) => {
    const normalized = normalizeDesign(design);
    const result = calculate(normalized);
    return `
      <tr>
        <td>
          <strong>${normalized.designName}</strong>
          <span>${normalized.colorway}</span>
        </td>
        <td>${normalized.method}<br /><span>${displayAge(normalized.ageGroup)} / ${displayGender(normalized.gender)}</span></td>
        <td>${number(normalized.quantity)}<br /><span>S ${number(normalized.sizeS)} @ ${money(buildSizeRow(normalized, "S").unitCost)} &middot; M ${number(normalized.sizeM)} @ ${money(buildSizeRow(normalized, "M").unitCost)} &middot; L ${number(normalized.sizeL)} @ ${money(buildSizeRow(normalized, "L").unitCost)}</span></td>
        <td>${money(result.unitCost)}</td>
        <td>${percent(result.bulkDiscount)}</td>
        <td><strong>${money(result.sellingPrice)}</strong></td>
        <td>${percent(Math.round(result.actualMargin))}</td>
      </tr>
    `;
  });

  document.querySelector("#compareRows").innerHTML = rows.length
    ? rows.join("")
    : `<tr><td colspan="7">${t("noSavedDesigns")}</td></tr>`;
}

function updateView() {
  document.querySelector("#singleView").classList.toggle("hidden", activeView !== "single");
  document.querySelector("#compareView").classList.toggle("hidden", activeView !== "compare");
  document.querySelector("#singleViewButton").classList.toggle("active", activeView === "single");
  document.querySelector("#compareViewButton").classList.toggle("active", activeView === "compare");
}

function escapeExcelCell(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function exportDesignsToExcel() {
  const currentDesign = getFormData();
  const exportRows = designs.map((design) => (design.id === currentDesign.id ? currentDesign : normalizeDesign(design)));
  const currency = activeCurrency;
  const rows = exportRows.map((design) => {
    const result = calculate(design);
    return {
      "Design Name": design.designName,
      Colorway: design.colorway,
      Gender: design.gender,
      Age: design.ageGroup,
      "Printing Method": design.method,
      "Size S": design.sizeS,
      [`Size S Blank Cost ${currency}`]: design.sizeSCost,
      [`Size S Print Cost ${currency}`]: design.sizeSPrint,
      [`Size S Packaging ${currency}`]: design.sizeSPackaging,
      [`Size S Label ${currency}`]: design.sizeSLabel,
      [`Size S Labor ${currency}`]: design.sizeSLabor,
      [`Size S Unit Cost ${currency}`]: buildSizeRow(design, "S").unitCost.toFixed(2),
      [`Size S Total ${currency}`]: buildSizeRow(design, "S").total.toFixed(2),
      "Size M": design.sizeM,
      [`Size M Blank Cost ${currency}`]: design.sizeMCost,
      [`Size M Print Cost ${currency}`]: design.sizeMPrint,
      [`Size M Packaging ${currency}`]: design.sizeMPackaging,
      [`Size M Label ${currency}`]: design.sizeMLabel,
      [`Size M Labor ${currency}`]: design.sizeMLabor,
      [`Size M Unit Cost ${currency}`]: buildSizeRow(design, "M").unitCost.toFixed(2),
      [`Size M Total ${currency}`]: buildSizeRow(design, "M").total.toFixed(2),
      "Size L": design.sizeL,
      [`Size L Blank Cost ${currency}`]: design.sizeLCost,
      [`Size L Print Cost ${currency}`]: design.sizeLPrint,
      [`Size L Packaging ${currency}`]: design.sizeLPackaging,
      [`Size L Label ${currency}`]: design.sizeLLabel,
      [`Size L Labor ${currency}`]: design.sizeLLabor,
      [`Size L Unit Cost ${currency}`]: buildSizeRow(design, "L").unitCost.toFixed(2),
      [`Size L Total ${currency}`]: buildSizeRow(design, "L").total.toFixed(2),
      "Total Quantity": design.quantity,
      [`Average Blank Shirt Cost ${currency}`]: design.blankCost.toFixed(2),
      [`Size Production Total ${currency}`]: result.sizeProductionTotal.toFixed(2),
      [`Print Cost Per Shirt ${currency}`]: design.printCost,
      [`Setup Fee ${currency}`]: design.setupFee,
      [`Packaging Per Shirt ${currency}`]: design.packaging,
      [`Label / Tag Per Shirt ${currency}`]: design.labelCost,
      [`Labor Per Shirt ${currency}`]: design.laborCost,
      [`License / Trade Permit ${currency}`]: design.overheadLicense,
      [`Design Permit / Archive Rights ${currency}`]: design.overheadDesignPermit,
      [`Label Tags Batch ${currency}`]: design.overheadLabelsTags,
      [`Delivery Charges ${currency}`]: design.overheadDelivery,
      [`Other Overhead ${currency}`]: design.overheadOther,
      "Other Overhead Details": design.overheadOtherDetails || "",
      [`Overhead Total ${currency}`]: result.overheadTotal.toFixed(2),
      [`Overhead Per Shirt ${currency}`]: result.overheadPerShirt.toFixed(2),
      [`Total Production Cost ${currency}`]: result.productionCost.toFixed(2),
      [`Cost Per Shirt ${currency}`]: result.unitCost.toFixed(2),
      "Bulk Discount %": result.bulkDiscount,
      [`Discounted Cost Per Shirt ${currency}`]: result.discountedUnitCost.toFixed(2),
      "Desired Margin %": design.margin,
      "Actual Margin %": result.actualMargin.toFixed(2),
      "Tax Included": design.vatEnabled ? "Yes" : "No",
      [`Suggested Selling Price ${currency}`]: result.sellingPrice.toFixed(2),
      [`Gross Profit Per Shirt ${currency}`]: result.grossProfit.toFixed(2)
    };
  });

  const headers = Object.keys(rows[0] || {});
  const tableRows = [
    `<tr>${headers.map((header) => `<th>${escapeExcelCell(header)}</th>`).join("")}</tr>`,
    ...rows.map((row) => `<tr>${headers.map((header) => `<td>${escapeExcelCell(row[header])}</td>`).join("")}</tr>`)
  ].join("");
  const workbook = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel">
      <head><meta charset="UTF-8" /></head>
      <body><table>${tableRows}</table></body>
    </html>
  `;
  const blob = new Blob([workbook], { type: "application/vnd.ms-excel;charset=utf-8" });
  const link = document.createElement("a");
  const stamp = new Date().toISOString().slice(0, 10);
  const url = URL.createObjectURL(blob);
  link.href = url;
  link.download = t("excelFileName", { stamp });
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast(t("excelExported"));
}

function exportCurrentDesignToPdf() {
  const design = getFormData();
  const result = calculate(design);
  const sizeRows = [
    buildSizeRow(design, "S"),
    buildSizeRow(design, "M"),
    buildSizeRow(design, "L")
  ];
  const breakdownRows = result.breakdown
    .map(([label, value]) => `<tr><td>${escapeExcelCell(label)}</td><td>${money(value)}</td></tr>`)
    .join("");
  const pdfImages = normalizeShirtImages(design);
  const pdfPhotoRows = [
    ["front", t("front")],
    ["back", t("back")],
    ["right", t("right")],
    ["left", t("left")]
  ];
  const pdfPhotoGrid = pdfPhotoRows
    .map(([view, label]) => {
      const image = pdfImages[view];
      return `
        <figure class="photo-card">
          <div class="photo-frame">
            ${image ? `<img src="${image}" alt="${escapeExcelCell(label)}" />` : `<span>${t("noPhoto")}</span>`}
          </div>
          <figcaption>${escapeExcelCell(label)}</figcaption>
        </figure>
      `;
    })
    .join("");
  const html = `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>${escapeExcelCell(design.designName)} Quote</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 32px; color: #0f172a; }
          h1 { margin: 0; font-size: 30px; }
          h2 { margin-top: 28px; font-size: 18px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; }
          .brand { display: flex; align-items: center; gap: 14px; border-bottom: 4px solid #2563eb; padding-bottom: 18px; }
          .mark { width: 48px; height: 48px; display: grid; place-items: center; background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: white; font-weight: 800; border-radius: 8px; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 18px; }
          .box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; }
          .label { color: #64748b; font-size: 12px; text-transform: uppercase; }
          .value { margin-top: 4px; font-weight: 700; }
          table { width: 100%; border-collapse: collapse; margin-top: 12px; }
          th, td { padding: 10px; border-bottom: 1px solid #e2e8f0; text-align: left; }
          th { background: #eff6ff; color: #0c4a6e; }
          .summary { background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); color: #0c4a6e; border: 1px solid #bae6fd; border-radius: 8px; padding: 18px; margin-top: 18px; }
          .summary strong { color: #0369a1; font-size: 28px; display: block; margin-top: 6px; }
          .photo-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 12px; }
          .photo-card { margin: 0; break-inside: avoid; }
          .photo-frame { display: grid; aspect-ratio: 3 / 4; place-items: center; overflow: hidden; border: 1px solid #dbe4ee; border-radius: 8px; background: #f8fafc; }
          .photo-frame img { width: 100%; height: 100%; object-fit: contain; }
          .photo-frame span { color: #94a3b8; font-size: 12px; text-align: center; padding: 10px; }
          figcaption { margin-top: 6px; color: #475569; font-size: 12px; font-weight: 700; text-align: center; text-transform: uppercase; }
          .footer { margin-top: 32px; color: #64748b; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="brand">
          <div class="mark">AT</div>
          <div>
            <h1>${t("brandName")}</h1>
            <div>${t("quoteTitle")}</div>
          </div>
        </div>

        <div class="grid">
          <div class="box"><div class="label">${t("design")}</div><div class="value">${escapeExcelCell(design.designName)}</div></div>
          <div class="box"><div class="label">${t("colorway")}</div><div class="value">${escapeExcelCell(design.colorway)}</div></div>
          <div class="box"><div class="label">${t("printingMethod")}</div><div class="value">${design.method}</div></div>
          <div class="box"><div class="label">${t("specs")}</div><div class="value">${displayAge(design.ageGroup)} / ${displayGender(design.gender)}</div></div>
        </div>

        <h2>${t("shirtPhotos")}</h2>
        <div class="photo-grid">${pdfPhotoGrid}</div>

        <h2>${t("sizeBreakdown")}</h2>
        <table>
          <thead><tr><th>${t("size")}</th><th>${t("qty")}</th><th>${t("blank")}</th><th>${t("print")}</th><th>${t("packaging")}</th><th>${t("label")}</th><th>${t("labor")}</th><th>${t("total")}</th></tr></thead>
          <tbody>${sizeRows.map((row) => `<tr><td>${row.size}</td><td>${number(row.quantity)}</td><td>${money(row.blank)}</td><td>${money(row.print)}</td><td>${money(row.packaging)}</td><td>${money(row.label)}</td><td>${money(row.labor)}</td><td>${money(row.total)}</td></tr>`).join("")}<tr><th>${t("total")}</th><th>${number(design.quantity)}</th><th colspan="5">${t("averageCostIncluding", { cost: money(result.unitCost) })}</th><th>${money(result.sizeProductionTotal)}</th></tr></tbody>
        </table>

        <h2>${t("costBreakdown")}</h2>
        <table>
          <thead><tr><th>${t("item")}</th><th>${t("total")} ${activeCurrency}</th></tr></thead>
          <tbody>${breakdownRows}<tr><th>${t("totalProductionCost")}</th><th>${money(result.productionCost)}</th></tr></tbody>
        </table>

        <div class="summary">
          <div>${t("suggestedSellingPrice")}</div>
          <strong>${money(result.sellingPrice)}</strong>
          <p>${t("quoteSummary", { cost: money(result.unitCost), discount: percent(result.bulkDiscount), profit: money(result.grossProfit), margin: percent(Math.round(result.actualMargin)) })}</p>
        </div>

        <div class="footer">${t("generated", { date: localizedDate() })}</div>
      </body>
    </html>
  `;
  const printWindow = window.open("", "", "width=1000,height=800");
  if (!printWindow) {
    showToast(t("allowPopups"));
    return;
  }
  printWindow.document.write(html);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}

function saveCurrentDesign() {
  const data = getFormData();
  const index = designs.findIndex((design) => design.id === data.id);
  if (index >= 0) {
    designs[index] = data;
  } else {
    designs.unshift(data);
    activeId = data.id;
  }
  persistDesigns();
  updateUI();
  showToast(t("designSaved"));
}

function duplicateDesign(source = getFormData()) {
  const copy = {
    ...source,
    id: crypto.randomUUID(),
    designName: `${source.designName} Copy`
  };
  designs.unshift(copy);
  persistDesigns();
  setFormData(copy);
  showToast(t("designDuplicated"));
}

function deleteDesign(id) {
  designs = designs.filter((design) => design.id !== id);
  if (!designs.length) {
    const fresh = { ...seedDesigns[0], id: crypto.randomUUID(), designName: t("untitled") };
    designs = [fresh];
  }
  persistDesigns();
  setFormData(designs[0]);
  showToast(t("designDeleted"));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.setTimeout(() => toast.classList.remove("visible"), 2200);
}

form.addEventListener("input", updateUI);
form.addEventListener("change", updateUI);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  saveCurrentDesign();
});

document.querySelector("#applyPresetButton").addEventListener("click", () => {
  const preset = methodPresets[document.querySelector("#method").value];
  ["S", "M", "L"].forEach((size) => {
    document.querySelector(`#size${size}Print`).value = preset.printCost;
  });
  document.querySelector("#setupFee").value = preset.setupFee;
  updateUI();
  showToast(t("presetApplied"));
});

document.querySelectorAll("[data-method-option]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("#method").value = button.dataset.methodOption;
    updateUI();
  });
});

document.querySelector("#newDesignButton").addEventListener("click", () => {
  activeId = null;
  setFormData({ ...seedDesigns[0], id: crypto.randomUUID(), designName: t("untitled") });
  activeId = null;
  updateUI();
});

document.querySelector("#duplicateButton").addEventListener("click", () => duplicateDesign());

document.querySelector("#exportExcelButton").addEventListener("click", exportDesignsToExcel);
document.querySelector("#exportPdfButton").addEventListener("click", exportCurrentDesignToPdf);
document.querySelector("#languageSelect").addEventListener("change", (event) => {
  activeLanguage = languageOptions[event.target.value] ? event.target.value : "en";
  persistLanguage();
  updateUI();
  showToast(t("languageChanged", { language: languageOptions[activeLanguage].label }));
});
document.querySelector("#currencySelect").addEventListener("change", (event) => {
  activeCurrency = currencyOptions[event.target.value] ? event.target.value : "AED";
  persistCurrency();
  updateUI();
  showToast(t("currencyChanged", { currency: activeCurrency }));
});

document.querySelector("#singleViewButton").addEventListener("click", () => {
  activeView = "single";
  updateView();
});

document.querySelector("#compareViewButton").addEventListener("click", () => {
  activeView = "compare";
  renderCompareRows();
  updateView();
});

document.querySelector("#bulkDiscountRows").addEventListener("input", (event) => {
  const input = event.target.closest("input[data-index]");
  if (!input) return;
  const index = Number(input.dataset.index);
  bulkDiscounts[index].discountPercent = Math.max(0, Math.min(50, Number(input.value) || 0));
  persistBulkDiscounts();
  updateUI();
});

document.querySelectorAll("[data-photo-upload]").forEach((input) => {
  input.addEventListener("change", (event) => {
    const view = event.target.dataset.photoUpload;
    const file = event.target.files?.[0];
    if (!file || !shirtViewKeys.includes(view)) return;

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      currentShirtImages[view] = String(reader.result || "");
      currentMockupImage = currentShirtImages.front || currentMockupImage;
      activeShirtView = view;
      viewerZoom = 1;
      stopSpin();
      updateUI();
      showToast(t("mockupUploaded"));
    });
    reader.readAsDataURL(file);
  });
});

document.querySelectorAll("[data-shirt-view]").forEach((button) => {
  button.addEventListener("click", () => {
    activeShirtView = button.dataset.shirtView;
    viewerZoom = 1;
    stopSpin();
    updateUI();
  });
});

document.querySelector("#zoomInButton").addEventListener("click", () => {
  viewerZoom = Math.min(4, viewerZoom + 0.25);
  updateUI();
});

document.querySelector("#zoomOutButton").addEventListener("click", () => {
  viewerZoom = Math.max(1, viewerZoom - 0.25);
  updateUI();
});

document.querySelector("#resetZoomButton").addEventListener("click", () => {
  viewerZoom = 1;
  updateUI();
});

document.querySelector("#spinViewButton").addEventListener("click", () => {
  if (spinTimer) {
    stopSpin();
    updateUI();
    return;
  }

  const availableViews = shirtViewKeys.filter((view) => currentShirtImages[view]);
  if (availableViews.length < 2) {
    showToast(t("shirtPhotosDescription"));
    return;
  }

  let index = Math.max(0, availableViews.indexOf(activeShirtView));
  spinTimer = window.setInterval(() => {
    index = (index + 1) % availableViews.length;
    activeShirtView = availableViews[index];
    viewerZoom = 1;
    updateUI();
  }, 900);
  updateUI();
});

libraryList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const design = designs.find((item) => item.id === button.dataset.id);
  if (!design) return;

  if (button.dataset.action === "select") setFormData(design);
  if (button.dataset.action === "copy") duplicateDesign(design);
  if (button.dataset.action === "delete") deleteDesign(design.id);
});

searchInput.addEventListener("input", renderLibrary);
methodFilter.addEventListener("change", renderLibrary);

setFormData(designs[0]);
