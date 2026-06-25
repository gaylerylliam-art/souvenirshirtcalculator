const STORAGE_KEY = "archivethread-uae-designs";
const BULK_STORAGE_KEY = "archivethread-uae-bulk-discounts";
const AED = new Intl.NumberFormat("en-AE", {
  style: "currency",
  currency: "AED",
  minimumFractionDigits: 2
});

const methodPresets = {
  DTF: { printCost: 35, setupFee: 85, color: "#0f6b4a" },
  DTG: { printCost: 35, setupFee: 55, color: "#9b1c31" },
  "Silk Screen": { printCost: 35, setupFee: 220, color: "#171717" }
};

const MIN_SELLING_PRICE = 250;
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
    quantity: 50,
    blankCost: 25,
    printCost: 35,
    setupFee: 85,
    packaging: 4.5,
    labelCost: 2.25,
    laborCost: 6,
    overhead: 3.5,
    overheadLicense: 60,
    overheadDesignPermit: 45,
    overheadLabelsTags: 50,
    overheadOther: 20,
    margin: 55,
    vatEnabled: true,
    mockupImage: ""
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
    quantity: 35,
    blankCost: 25,
    printCost: 35,
    setupFee: 55,
    packaging: 5,
    labelCost: 2.5,
    laborCost: 6.5,
    overhead: 4,
    overheadLicense: 50,
    overheadDesignPermit: 45,
    overheadLabelsTags: 30,
    overheadOther: 15,
    margin: 58,
    vatEnabled: true,
    mockupImage: ""
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
    quantity: 120,
    blankCost: 25,
    printCost: 35,
    setupFee: 220,
    packaging: 4,
    labelCost: 2,
    laborCost: 5,
    overhead: 3,
    overheadLicense: 95,
    overheadDesignPermit: 80,
    overheadLabelsTags: 140,
    overheadOther: 45,
    margin: 52,
    vatEnabled: true,
    mockupImage: ""
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
  "overheadOther",
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
let activeId = designs[0]?.id || null;
let currentMockupImage = designs[0]?.mockupImage || "";
let activeView = "single";

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

function getSizeQuantityFromInputs() {
  return Math.max(1, Math.round(numericValue("sizeS") + numericValue("sizeM") + numericValue("sizeL")));
}

function getOverheadTotal(design) {
  return (
    designNumber(design, "overheadLicense") +
    designNumber(design, "overheadDesignPermit") +
    designNumber(design, "overheadLabelsTags") +
    designNumber(design, "overheadOther")
  );
}

function getBulkDiscount(quantity) {
  const tier = bulkDiscounts.find((item) => quantity >= item.minQty && quantity <= item.maxQty);
  return tier ? designNumber(tier, "discountPercent") : 0;
}

function getFormData() {
  const quantity = getSizeQuantityFromInputs();
  const overheadTotal = getOverheadTotal({
    overheadLicense: numericValue("overheadLicense"),
    overheadDesignPermit: numericValue("overheadDesignPermit"),
    overheadLabelsTags: numericValue("overheadLabelsTags"),
    overheadOther: numericValue("overheadOther")
  });

  return {
    id: activeId || crypto.randomUUID(),
    designName: document.querySelector("#designName").value.trim() || "Untitled souvenir shirt",
    colorway: document.querySelector("#colorway").value.trim() || "Custom colorway",
    gender: document.querySelector("#gender").value,
    ageGroup: document.querySelector("#ageGroup").value,
    method: document.querySelector("#method").value,
    sizeS: Math.max(0, Math.round(numericValue("sizeS"))),
    sizeM: Math.max(0, Math.round(numericValue("sizeM"))),
    sizeL: Math.max(0, Math.round(numericValue("sizeL"))),
    quantity,
    blankCost: numericValue("blankCost"),
    printCost: numericValue("printCost"),
    setupFee: numericValue("setupFee"),
    packaging: numericValue("packaging"),
    labelCost: numericValue("labelCost"),
    laborCost: numericValue("laborCost"),
    overhead: overheadTotal / quantity,
    overheadLicense: numericValue("overheadLicense"),
    overheadDesignPermit: numericValue("overheadDesignPermit"),
    overheadLabelsTags: numericValue("overheadLabelsTags"),
    overheadOther: numericValue("overheadOther"),
    margin: numericValue("margin"),
    vatEnabled: document.querySelector("#vatEnabled").checked,
    mockupImage: currentMockupImage
  };
}

function calculate(design) {
  const quantity = Math.max(1, designNumber(design, "quantity", 1));
  const overheadTotal = getOverheadTotal(design) || designNumber(design, "overhead") * quantity;
  const overheadPerShirt = overheadTotal / quantity;
  const variableUnitCost =
    designNumber(design, "blankCost") +
    designNumber(design, "printCost") +
    designNumber(design, "packaging") +
    designNumber(design, "labelCost") +
    designNumber(design, "laborCost");
  const productionCost = variableUnitCost * quantity + designNumber(design, "setupFee") + overheadTotal;
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
    variableUnitCost,
    productionCost,
    unitCost,
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
      ["Blank shirt", designNumber(design, "blankCost") * quantity],
      ["Printing", designNumber(design, "printCost") * quantity],
      ["Setup", designNumber(design, "setupFee")],
      ["Packaging", designNumber(design, "packaging") * quantity],
      ["Label / tag", designNumber(design, "labelCost") * quantity],
      ["Labor", designNumber(design, "laborCost") * quantity],
      ["License / trade permit", designNumber(design, "overheadLicense")],
      ["Design permit / archive rights", designNumber(design, "overheadDesignPermit")],
      ["Label tags batch", designNumber(design, "overheadLabelsTags")],
      ["Other overhead", designNumber(design, "overheadOther")]
    ]
  };
}

function setFormData(design) {
  currentMockupImage = design.mockupImage || "";
  const nextDesign = normalizeDesign(design);
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
    quantity,
    overheadLicense: designNumber(design, "overheadLicense", overheadTotal),
    overheadDesignPermit: designNumber(design, "overheadDesignPermit", 0),
    overheadLabelsTags: designNumber(design, "overheadLabelsTags", 0),
    overheadOther: designNumber(design, "overheadOther", 0),
    overhead: overheadTotal / quantity
  };
}

function updateUI() {
  const design = getFormData();
  const result = calculate(design);
  const methodColor = methodPresets[design.method]?.color || "#0f6b4a";
  const mockupPreview = document.querySelector("#mockupPreview");

  marginOutput.value = `${design.margin}%`;
  document.querySelector("#quantity").value = design.quantity;
  document.querySelector("#overhead").value = result.overheadPerShirt.toFixed(2);
  document.querySelector("#overheadTotal").textContent = `${AED.format(result.overheadTotal)} total`;
  document.querySelector("#bulkDiscount").textContent = `${result.bulkDiscount}%`;
  document.querySelector("#activeBulkDiscount").textContent = `${result.bulkDiscount}% active`;
  document.querySelector("#editingStatus").textContent = activeId ? "Editing saved design" : "New design";
  document.querySelector("#shirtPreview").style.setProperty("--print-color", methodColor);
  mockupPreview.src = design.mockupImage || "";
  mockupPreview.hidden = !design.mockupImage;
  document.querySelector("#sellingPrice").textContent = AED.format(result.sellingPrice);
  document.querySelector("#vatNote").textContent = design.vatEnabled
    ? `Includes 5% UAE VAT. Minimum premium shelf price is ${AED.format(MIN_SELLING_PRICE)}.`
    : `VAT excluded. Minimum premium shelf price is ${AED.format(MIN_SELLING_PRICE)}.`;
  document.querySelector("#totalCost").textContent = AED.format(result.productionCost);
  document.querySelector("#unitCost").textContent = AED.format(result.unitCost);
  document.querySelector("#grossProfit").textContent = AED.format(result.grossProfit);
  document.querySelector("#actualMargin").textContent = `${Math.round(result.actualMargin)}%`;

  renderBreakdown(result);
  renderBulkDiscounts();
  renderLibrary();
  renderCompareRows();
  updateView();
}

function renderBulkDiscounts() {
  document.querySelector("#bulkDiscountRows").innerHTML = bulkDiscounts
    .map((tier, index) => {
      const label = tier.maxQty >= 999999 ? `${tier.minQty}+ units` : `${tier.minQty}-${tier.maxQty} units`;
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
  const max = Math.max(...result.breakdown.map(([, value]) => value), 1);
  document.querySelector("#breakdownRows").innerHTML = result.breakdown
    .map(([label, value]) => {
      const width = Math.max(4, (value / max) * 100);
      return `
        <div class="breakdown-row">
          <div>
            <span>${label}</span>
            <strong>${AED.format(value)}</strong>
          </div>
          <div class="bar-track"><span style="width:${width}%"></span></div>
        </div>
      `;
    })
    .join("");
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
    : `<div class="empty-state">No saved shirts match this filter.</div>`;
}

function renderLibraryItem(design) {
  const result = calculate(design);
  const activeClass = design.id === activeId ? "active" : "";
  const color = methodPresets[design.method]?.color || "#0f6b4a";
  const thumb = design.mockupImage
    ? `<img class="mini-mockup" src="${design.mockupImage}" alt="" />`
    : `<span class="mini-shirt" style="--print-color:${color}"></span>`;
  return `
    <article class="library-item ${activeClass}" data-id="${design.id}">
      <button class="library-select" type="button" data-action="select" data-id="${design.id}">
        ${thumb}
        <span>
          <strong>${design.designName}</strong>
          <small>${design.method} &middot; ${design.ageGroup || "Adult"} &middot; ${design.gender || "Man"} &middot; ${design.quantity} pcs &middot; ${AED.format(result.sellingPrice)}</small>
        </span>
      </button>
      <div class="library-actions">
        <button type="button" title="Duplicate design" data-action="copy" data-id="${design.id}">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M8 8h11v11H8z" /><path d="M5 16H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1" /></svg>
        </button>
        <button type="button" title="Delete design" data-action="delete" data-id="${design.id}">
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
        <td>${normalized.method}<br /><span>${normalized.ageGroup} / ${normalized.gender}</span></td>
        <td>${normalized.quantity}<br /><span>S ${normalized.sizeS} &middot; M ${normalized.sizeM} &middot; L ${normalized.sizeL}</span></td>
        <td>${AED.format(result.unitCost)}</td>
        <td>${result.bulkDiscount}%</td>
        <td><strong>${AED.format(result.sellingPrice)}</strong></td>
        <td>${Math.round(result.actualMargin)}%</td>
      </tr>
    `;
  });

  document.querySelector("#compareRows").innerHTML = rows.length
    ? rows.join("")
    : `<tr><td colspan="7">No saved designs yet.</td></tr>`;
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
  const rows = exportRows.map((design) => {
    const result = calculate(design);
    return {
      "Design Name": design.designName,
      Colorway: design.colorway,
      Gender: design.gender,
      Age: design.ageGroup,
      "Printing Method": design.method,
      "Size S": design.sizeS,
      "Size M": design.sizeM,
      "Size L": design.sizeL,
      "Total Quantity": design.quantity,
      "Blank Shirt Cost AED": design.blankCost,
      "Print Cost Per Shirt AED": design.printCost,
      "Setup Fee AED": design.setupFee,
      "Packaging Per Shirt AED": design.packaging,
      "Label / Tag Per Shirt AED": design.labelCost,
      "Labor Per Shirt AED": design.laborCost,
      "License / Trade Permit AED": design.overheadLicense,
      "Design Permit / Archive Rights AED": design.overheadDesignPermit,
      "Label Tags Batch AED": design.overheadLabelsTags,
      "Other Overhead AED": design.overheadOther,
      "Overhead Total AED": result.overheadTotal.toFixed(2),
      "Overhead Per Shirt AED": result.overheadPerShirt.toFixed(2),
      "Total Production Cost AED": result.productionCost.toFixed(2),
      "Cost Per Shirt AED": result.unitCost.toFixed(2),
      "Bulk Discount %": result.bulkDiscount,
      "Discounted Cost Per Shirt AED": result.discountedUnitCost.toFixed(2),
      "Desired Margin %": design.margin,
      "Actual Margin %": result.actualMargin.toFixed(2),
      "VAT Included": design.vatEnabled ? "Yes" : "No",
      "Suggested Selling Price AED": result.sellingPrice.toFixed(2),
      "Gross Profit Per Shirt AED": result.grossProfit.toFixed(2)
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
  link.download = `ArchiveThread-UAE-shirt-pricing-${stamp}.xls`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("Excel file exported.");
}

function exportCurrentDesignToPdf() {
  const design = getFormData();
  const result = calculate(design);
  const sizeRows = [
    ["S", design.sizeS],
    ["M", design.sizeM],
    ["L", design.sizeL]
  ];
  const breakdownRows = result.breakdown
    .map(([label, value]) => `<tr><td>${escapeExcelCell(label)}</td><td>${AED.format(value)}</td></tr>`)
    .join("");
  const html = `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>${escapeExcelCell(design.designName)} Quote</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 32px; color: #17211d; }
          h1 { margin: 0; font-size: 30px; }
          h2 { margin-top: 28px; font-size: 18px; border-bottom: 2px solid #dfe4df; padding-bottom: 8px; }
          .brand { display: flex; align-items: center; gap: 14px; border-bottom: 4px solid #0f6b4a; padding-bottom: 18px; }
          .mark { width: 48px; height: 48px; display: grid; place-items: center; background: #1e2421; color: white; font-weight: 800; border-radius: 8px; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 18px; }
          .box { background: #f6f7f4; border: 1px solid #dfe4df; border-radius: 8px; padding: 12px; }
          .label { color: #68716d; font-size: 12px; text-transform: uppercase; }
          .value { margin-top: 4px; font-weight: 700; }
          table { width: 100%; border-collapse: collapse; margin-top: 12px; }
          th, td { padding: 10px; border-bottom: 1px solid #dfe4df; text-align: left; }
          th { background: #f3f6f2; }
          .summary { background: #1e2421; color: white; border-radius: 8px; padding: 18px; margin-top: 18px; }
          .summary strong { color: #f4c466; font-size: 28px; display: block; margin-top: 6px; }
          .footer { margin-top: 32px; color: #68716d; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="brand">
          <div class="mark">AT</div>
          <div>
            <h1>ArchiveThread UAE</h1>
            <div>Premium Souvenir T-Shirt Quote</div>
          </div>
        </div>

        <div class="grid">
          <div class="box"><div class="label">Design</div><div class="value">${escapeExcelCell(design.designName)}</div></div>
          <div class="box"><div class="label">Colorway</div><div class="value">${escapeExcelCell(design.colorway)}</div></div>
          <div class="box"><div class="label">Printing</div><div class="value">${design.method}</div></div>
          <div class="box"><div class="label">Specs</div><div class="value">${design.ageGroup} / ${design.gender}</div></div>
        </div>

        <h2>Size Breakdown</h2>
        <table>
          <thead><tr><th>Size</th><th>Quantity</th></tr></thead>
          <tbody>${sizeRows.map(([size, qty]) => `<tr><td>${size}</td><td>${qty}</td></tr>`).join("")}<tr><th>Total</th><th>${design.quantity}</th></tr></tbody>
        </table>

        <h2>Cost Breakdown</h2>
        <table>
          <thead><tr><th>Item</th><th>Total AED</th></tr></thead>
          <tbody>${breakdownRows}<tr><th>Total production cost</th><th>${AED.format(result.productionCost)}</th></tr></tbody>
        </table>

        <div class="summary">
          <div>Suggested selling price</div>
          <strong>${AED.format(result.sellingPrice)}</strong>
          <p>Cost per shirt: ${AED.format(result.unitCost)} &middot; Bulk discount: ${result.bulkDiscount}% &middot; Gross profit per shirt: ${AED.format(result.grossProfit)} &middot; Margin: ${Math.round(result.actualMargin)}%</p>
        </div>

        <div class="footer">Generated ${new Date().toLocaleString()} for ArchiveThread UAE.</div>
      </body>
    </html>
  `;
  const printWindow = window.open("", "", "width=1000,height=800");
  if (!printWindow) {
    showToast("Allow popups to export PDF.");
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
  showToast("Design saved to library.");
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
  showToast("Design duplicated.");
}

function deleteDesign(id) {
  designs = designs.filter((design) => design.id !== id);
  if (!designs.length) {
    const fresh = { ...seedDesigns[0], id: crypto.randomUUID(), designName: "New UAE Souvenir Tee" };
    designs = [fresh];
  }
  persistDesigns();
  setFormData(designs[0]);
  showToast("Design deleted.");
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
  document.querySelector("#printCost").value = preset.printCost;
  document.querySelector("#setupFee").value = preset.setupFee;
  updateUI();
  showToast("Printing preset applied.");
});

document.querySelector("#newDesignButton").addEventListener("click", () => {
  activeId = null;
  setFormData({ ...seedDesigns[0], id: crypto.randomUUID(), designName: "New UAE Souvenir Tee" });
  activeId = null;
  updateUI();
});

document.querySelector("#duplicateButton").addEventListener("click", () => duplicateDesign());

document.querySelector("#exportExcelButton").addEventListener("click", exportDesignsToExcel);
document.querySelector("#exportPdfButton").addEventListener("click", exportCurrentDesignToPdf);

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

document.querySelector("#mockupUpload").addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    currentMockupImage = String(reader.result || "");
    updateUI();
    showToast("Mockup layout uploaded.");
  });
  reader.readAsDataURL(file);
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
