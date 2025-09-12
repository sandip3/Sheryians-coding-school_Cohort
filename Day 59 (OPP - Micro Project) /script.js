// book library - books

function libery_class() {
    // Book_library Class (Constructer Function)
    function Book_Library() {
        this.books = []
    }

    Book_Library.prototype.add_book = function (book) {
        if (Array.isArray(book)) {
            this.books.push(...book)
        }
        else {
            this.books.push(book)
        }
    }

    Book_Library.prototype.info_book = function () {
        this.books.forEach(book => {
            console.group("Book Detail's")
            console.log(`Book ID : ${book.id}`);
            console.log(`Book Name : ${book.name}`);
            console.log(`Book Author : ${book.author}`);
            console.log(`Book Price : ${book.price}`);
            console.log(`${book.isRead ? "✅" : "❌"} You have ${book.isRead ? "Readed" : "Yet to Read"} this book`);
            // console.table(book)
            console.groupEnd()
        })

        // Book Class (Constructer Function)
        function Books(name, price, author) {
            this.id = Math.floor(Math.random() * 100) + 1
            this.name = name
            this.price = price
            this.author = author
            this.isRead = false
        }

        Books.prototype.book_reading = function () {
            this.isRead = true
        }

        // Creating Objects

        let b1 = new Books("Rich dad , poor Dad", 400, "Robert T. Kiyosaki")
        let b2 = new Books("Don't Give a Fuck", 200, "Sandip")
        let b3 = new Books("Bible of JavaScript", 4000, "Sheryians Coding School")

        b1.book_reading()
        b3.book_reading()

        let surat_liberary = new Book_Library()
        surat_liberary.add_book([b1, b2, b3])

        surat_liberary.info_book()
    }
}
// libery_class()



function mobile_class() {
    // mobile shop - mobile - sim

    // Shop Class
    function Mobile_shop(shop_name) {
        this.shop_name = shop_name
        this.product = []
    }

    Mobile_shop.prototype.add_product = function (product) {
        this.product.push(product)
    }

    Mobile_shop.prototype.show_case_product = function () {
        for (let i = 0; i < this.product.length; i++) {
            console.groupCollapsed(`Product : ${i + 1}`)
            console.log(`IMEI Number : ${this.product[i].IMEI_Num}`);
            console.log(`Brand : ${this.product[i].brand}`);
            console.log(`Model : ${this.product[i].model}`);
            console.log(`Price : ${this.product[i].price}`);
            console.log(`Color : ${this.product[i].color}`);
            console.log(`Release date : ${this.product[i].release_data}`);
            console.groupEnd()
        }
    }

    // Mobile Class
    function Mobile(brand, model, price, color, release_data) {
        this.IMEI_Num = Math.floor(Math.random() * 999999999) + 1
        this.brand = brand
        this.model = model
        this.price = price
        this.color = color
        this.release_data = release_data
        this.sims = []
    }

    Mobile.prototype.sim_inserting = function (sim) {
        if(this.sims.length <2) {
            this.sims.push(sim)
            console.log(`Inserting ${sim.name} Sim `);
            return true
        } else {
            console.error("Limit Reched you can't add more sim");
            return false
        }
    }

    // Sim Class
    function Sim() {
        this.sims = []
    }

    Sim.prototype.add_sim = function (name, balance) {

        if (this.sims.length < 2) {
            this.sims.push({
                name: name,
                balance: balance
            })
            console.log(`Sim ${name} is added with Balance of ${balance} `);
            return true

        } else {
            console.error("Only  Sim Can be Insert at time.")
            return false

        }
    }

    Sim.prototype.info_sim = function () {

        for (let i of this.sims) {
            console.group("Sim Data");
            console.log(`Sim Name : ${i.name}`)
            console.log(`Sim Balance  : ${i.balance}`)
            console.groupEnd()
        }
    }

    // Object Creation

    // SIM
    let sim1 = new Sim()
    let s1 = sim1.add_sim("Tata Docomo", 100)
    let s2 = sim1.add_sim("JIO", 500)



    // setTimeout(() => {
    //     sim1.info_sim()
    // }, 2000)

    // function Mobile(brand, model, price, color, release_data) {

    // Mobile
    let m1 = new Mobile("Sumsung", "Galaxy s24 ultra", 240000, "black", "15 - 2 - 2025")
    let m2 = new Mobile("Infinix", "Note 50 5G+", 15000, "blue", "1 - 5 - 2025")
    let m3 = new Mobile("POCO", "M2", 25000, "black", "20 - 4 - 2025")

    m1.sim_inserting(s1)
    m1.sim_inserting(s2)
    // console.log(m1);

    // Shop
    let Surat_shop = new Mobile_shop("Batiya's Mobile")

    Surat_shop.add_product(m1)
    Surat_shop.add_product(m2)
    Surat_shop.add_product(m3)

    Surat_shop.show_case_product()

    // console.log(Surat_shop);


}

// mobile_class()
