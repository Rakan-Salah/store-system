(function () {
  const KEY = "storeSystemData_v1";

  const SEED = {
    // one row per product+color combo (mirrors the old Product LEFT JOIN Color)
    products: [
      { PID: 1, NAME: "Laptop",     PRICE: 1249.99, COLOR: "Black" },
      { PID: 1, NAME: "Laptop",     PRICE: 1249.99, COLOR: "Silver" },
      { PID: 1, NAME: "Laptop",     PRICE: 1249.99, COLOR: "Gray" },
      { PID: 2, NAME: "Smartphone", PRICE: 799.49,  COLOR: "White" },
      { PID: 2, NAME: "Smartphone", PRICE: 799.49,  COLOR: "Black" },
      { PID: 3, NAME: "Headphones", PRICE: 149.75,  COLOR: "Blue" },
      { PID: 3, NAME: "Headphones", PRICE: 149.75,  COLOR: "White" },
      { PID: 4, NAME: "Smartwatch", PRICE: 299.99,  COLOR: "Silver" },
      { PID: 5, NAME: "Tablet",     PRICE: 449.90,  COLOR: "Gray" },
      { PID: 5, NAME: "Tablet",     PRICE: 449.90,  COLOR: "Blue" }
    ],
    employees: [
      { EID: 1,  NAME: "Mohammad Eid", EMAIL: "m.eid123@company.com", COUNTRY: "Jordan", CITY: "Amman",  STREET: "Mecca St",    HOLDERNAME: "Mohammad Eid", ACCOUNTNUMBER: "ACC1001", SALARYAMOUNT: 1234.75, PREVIOUSPAYDATE: "2024-12-01" },
      { EID: 2,  NAME: "Rania Ahmad",  EMAIL: "r.ahmad@company.com",  COUNTRY: "Jordan", CITY: "Zarqa",  STREET: "Zarqa St",    HOLDERNAME: "Rania Ahmad",  ACCOUNTNUMBER: "ACC1002", SALARYAMOUNT: 1112.50, PREVIOUSPAYDATE: "2024-12-01" },
      { EID: 3,  NAME: "Khaled Sami",  EMAIL: "k.sami@company.com",   COUNTRY: "Jordan", CITY: "Irbid",  STREET: "Jordan St",   HOLDERNAME: "Khaled Sami",  ACCOUNTNUMBER: "ACC1003", SALARYAMOUNT: 1003.25, PREVIOUSPAYDATE: "2024-12-01" },
      { EID: 4,  NAME: "Nour Hani",    EMAIL: "n.hani@company.com",   COUNTRY: "Jordan", CITY: "Amman",  STREET: "Gardens St",  HOLDERNAME: "Nour Hani",    ACCOUNTNUMBER: "ACC1004", SALARYAMOUNT: 1310.00, PREVIOUSPAYDATE: "2024-12-01" },
      { EID: 5,  NAME: "Ali Fares",    EMAIL: "a.fares@company.com",  COUNTRY: "Jordan", CITY: "Salt",   STREET: "Salt St",     HOLDERNAME: "Ali Fares",    ACCOUNTNUMBER: "ACC1005", SALARYAMOUNT: 915.60,  PREVIOUSPAYDATE: "2024-12-01" },
      { EID: 6,  NAME: "Sara Mahmoud", EMAIL: "s.mahmoud@company.com",COUNTRY: "Jordan", CITY: "Amman",  STREET: "Airport Rd",  HOLDERNAME: "Sara Mahmoud", ACCOUNTNUMBER: "ACC1006", SALARYAMOUNT: 1180.90, PREVIOUSPAYDATE: "2024-12-01" },
      { EID: 7,  NAME: "Omar Nasser",  EMAIL: "o.nasser@company.com", COUNTRY: "Jordan", CITY: "Madaba", STREET: "Main St",     HOLDERNAME: "Omar Nasser",  ACCOUNTNUMBER: "ACC1007", SALARYAMOUNT: 1025.40, PREVIOUSPAYDATE: "2024-12-01" },
      { EID: 8,  NAME: "Lina Yousef",  EMAIL: "l.yousef@company.com", COUNTRY: "Jordan", CITY: "Amman",  STREET: "Khalda St",   HOLDERNAME: "Lina Yousef",  ACCOUNTNUMBER: "ACC1008", SALARYAMOUNT: 1275.00, PREVIOUSPAYDATE: "2024-12-01" },
      { EID: 9,  NAME: "Ahmad Zaid",   EMAIL: "a.zaid@company.com",   COUNTRY: "Jordan", CITY: "Irbid",  STREET: "University St",HOLDERNAME: "Ahmad Zaid",   ACCOUNTNUMBER: "ACC1009", SALARYAMOUNT: 980.75,  PREVIOUSPAYDATE: "2024-12-01" },
      { EID: 10, NAME: "Dina Khalil",  EMAIL: "d.khalil@company.com", COUNTRY: "Jordan", CITY: "Amman",  STREET: "Abdoun St",   HOLDERNAME: "Dina Khalil",  ACCOUNTNUMBER: "ACC1010", SALARYAMOUNT: 1420.30, PREVIOUSPAYDATE: "2024-12-01" },
      { EID: 11, NAME: "Yazan Saleh",  EMAIL: "y.saleh@company.com",  COUNTRY: "Jordan", CITY: "Zarqa",  STREET: "New Zarqa St",HOLDERNAME: "Yazan Saleh",  ACCOUNTNUMBER: "ACC1011", SALARYAMOUNT: 890.00,  PREVIOUSPAYDATE: "2024-12-01" },
      { EID: 12, NAME: "Hala Farah",   EMAIL: "h.farah@company.com",  COUNTRY: "Jordan", CITY: "Salt",   STREET: "Al Ain St",   HOLDERNAME: "Hala Farah",   ACCOUNTNUMBER: "ACC1012", SALARYAMOUNT: 1105.60, PREVIOUSPAYDATE: "2024-12-01" },
      { EID: 13, NAME: "Muath Hassan", EMAIL: "m.hassan@company.com", COUNTRY: "Jordan", CITY: "Aqaba",  STREET: "Aqaba St",    HOLDERNAME: "Muath Hassan", ACCOUNTNUMBER: "ACC1013", SALARYAMOUNT: 1350.00, PREVIOUSPAYDATE: "2024-12-01" },
      { EID: 14, NAME: "Reem Adel",    EMAIL: "r.adel@company.com",   COUNTRY: "Jordan", CITY: "Amman",  STREET: "Sweifieh St", HOLDERNAME: "Reem Adel",    ACCOUNTNUMBER: "ACC1014", SALARYAMOUNT: 1210.45, PREVIOUSPAYDATE: "2024-12-01" },
      { EID: 15, NAME: "Tariq Omar",   EMAIL: "t.omar@company.com",   COUNTRY: "Jordan", CITY: "Jerash", STREET: "Roman St",    HOLDERNAME: "Tariq Omar",   ACCOUNTNUMBER: "ACC1015", SALARYAMOUNT: 995.80,  PREVIOUSPAYDATE: "2024-12-01" }
    ],
    orders: [
      { oID: 1,  order_date: "2025-01-01", receival: "Pickup",   payment: "Cash", customer_name: "Ahmad Ali",      total: "1249.99" },
      { oID: 2,  order_date: "2025-01-02", receival: "Delivery", payment: "Card", customer_name: "Sara Khaled",    total: "1598.98" },
      { oID: 3,  order_date: "2025-01-03", receival: "Pickup",   payment: "Cash", customer_name: "Omar Hassan",    total: "149.75"  },
      { oID: 4,  order_date: "2025-01-04", receival: "Delivery", payment: "Card", customer_name: "Lina Saleh",     total: "299.99"  },
      { oID: 5,  order_date: "2025-01-05", receival: "Pickup",   payment: "Cash", customer_name: "Yousef Mahmoud", total: "1349.70" },
      { oID: 6,  order_date: "2025-01-06", receival: "Delivery", payment: "Card", customer_name: "Mona Karim",     total: "1249.99" },
      { oID: 7,  order_date: "2025-01-07", receival: "Pickup",   payment: "Cash", customer_name: "Tariq Saleem",   total: "1598.98" },
      { oID: 8,  order_date: "2025-01-08", receival: "Delivery", payment: "Card", customer_name: "Rana Jaber",     total: "149.75"  },
      { oID: 9,  order_date: "2025-01-09", receival: "Pickup",   payment: "Cash", customer_name: "Fadi Nasser",    total: "599.98"  },
      { oID: 10, order_date: "2025-01-10", receival: "Delivery", payment: "Card", customer_name: "Leen Ahmad",     total: "449.90"  },
      { oID: 11, order_date: "2025-01-11", receival: "Pickup",   payment: "Cash", customer_name: "Ahmad Ali",      total: "1249.99" }
    ],
    customers: [
      { cID: 1, Name: "Ahmad Ali" }, { cID: 2, Name: "Sara Khaled" }, { cID: 3, Name: "Omar Hassan" },
      { cID: 4, Name: "Lina Saleh" }, { cID: 5, Name: "Yousef Mahmoud" }, { cID: 6, Name: "Mona Karim" },
      { cID: 7, Name: "Tariq Saleem" }, { cID: 8, Name: "Rana Jaber" }, { cID: 9, Name: "Fadi Nasser" },
      { cID: 10, Name: "Leen Ahmad" }
    ]
  };

  function load() {
    let raw = localStorage.getItem(KEY);
    if (!raw) {
      localStorage.setItem(KEY, JSON.stringify(SEED));
      return JSON.parse(JSON.stringify(SEED));
    }
    try { return JSON.parse(raw); }
    catch (e) {
      localStorage.setItem(KEY, JSON.stringify(SEED));
      return JSON.parse(JSON.stringify(SEED));
    }
  }
  function save(db) { localStorage.setItem(KEY, JSON.stringify(db)); }
  function nextId(arr, key) {
    return arr.reduce((m, r) => Math.max(m, Number(r[key]) || 0), 0) + 1;
  }

  const MockStore = {
    reset() { localStorage.removeItem(KEY); },

    /* ---------------- PRODUCTS ---------------- */
    getProducts() { return load().products; },
    addProduct({ name, price, color }) {
      const db = load();
      const id = db.products.reduce((m, p) => Math.max(m, Number(p.PID) || 0), 0) + 1;
      db.products.push({ PID: id, NAME: name, PRICE: Number(price), COLOR: color });
      save(db);
    },
    updateProduct({ id, name, price, color }) {
      const db = load();
      // update all rows for this product, then collapse to a single color (mirrors old logic)
      db.products = db.products.filter(p => String(p.PID) !== String(id));
      db.products.push({ PID: Number(id), NAME: name, PRICE: Number(price), COLOR: color });
      db.products.sort((a, b) => a.PID - b.PID);
      save(db);
    },
    deleteProduct(id) {
      const db = load();
      db.products = db.products.filter(p => String(p.PID) !== String(id));
      save(db);
    },

    /* ---------------- EMPLOYEES ---------------- */
    getEmployees() { return load().employees; },
    addEmployee(e) {
      const db = load();
      const id = nextId(db.employees, "EID");
      db.employees.push({
        EID: id, NAME: e.name, EMAIL: e.email, COUNTRY: e.country, CITY: e.city,
        STREET: e.street, HOLDERNAME: e.holder, ACCOUNTNUMBER: e.account,
        SALARYAMOUNT: Number(e.salary), PREVIOUSPAYDATE: null
      });
      save(db);
    },
    updateEmployee(e) {
      const db = load();
      const row = db.employees.find(x => String(x.EID) === String(e.eid));
      if (row) {
        row.NAME = e.name; row.EMAIL = e.email; row.COUNTRY = e.country;
        row.CITY = e.city; row.STREET = e.street; row.HOLDERNAME = e.holdername;
        row.ACCOUNTNUMBER = e.accountnumber; row.SALARYAMOUNT = Number(e.salary);
        row.PREVIOUSPAYDATE = e.previouspaydate || null;
      }
      save(db);
    },
    deleteEmployee(id) {
      const db = load();
      db.employees = db.employees.filter(x => String(x.EID) !== String(id));
      save(db);
    },

    /* ---------------- ORDERS ---------------- */
    getOrders() { return load().orders; },
    addOrder(o) {
      const db = load();
      const id = nextId(db.orders, "oID");
      db.orders.push({
        oID: id,
        order_date: new Date().toISOString().slice(0, 10),
        receival: o.receival,
        payment: o.payment,
        customer_name: o.customer_name || "Unknown",
        total: Number(o.total || 0).toFixed(2)
      });
      save(db);
      return id;
    },
    updateOrder({ oID, payment, receival }) {
      const db = load();
      const row = db.orders.find(x => String(x.oID) === String(oID));
      if (row) { row.payment = payment; row.receival = receival; }
      save(db);
    },
    deleteOrder(oID) {
      const db = load();
      db.orders = db.orders.filter(x => String(x.oID) !== String(oID));
      save(db);
    },

    priceForProduct(pid) {
      const p = load().products.find(x => String(x.PID) === String(pid));
      return p ? Number(p.PRICE) : 0;
    },

    /* ---------------- SALES DASHBOARD ---------------- */
    getSalesData() {
      const days = [];
      const revenueData = [];
      const base = [3800, 5200, 4100, 6400, 5900, 7300, 6900];
      const now = new Date();
      for (let i = 6; i >= 0; i--) {
        const d = new Date(now);
        d.setDate(now.getDate() - i);
        days.push(d.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase());
        revenueData.push(base[6 - i]);
      }
      return {
        totalRevenue: 29622.03,
        totalOrders: 28,
        productsSold: 47,
        activeCustomers: 10,
        days: days,
        revenueData: revenueData
      };
    }
  };

  window.MockStore = MockStore;
})();
