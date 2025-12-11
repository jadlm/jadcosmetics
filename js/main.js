
// === DONNÉES PRODUITS ===
const products = [
    {
    id: "to001",
    name: "Niacinamide 10% + Zinc 1%",
    category: "Skincare",
    price: 6.80 * 11, // 74.8 MAD
    oldPrice: null,
    images: ["images/image.png"],
    rating: 4.7,
    description: "Sérum régulateur de sébum et minimiseur de pores. Formule à base de niacinamide et zinc pour une peau plus nette et uniforme.",
    badge: "best",
    stock: 42
    },
    {
    id: "to002",
    name: "Hyaluronic Acid 2% + B5",
    category: "Skincare",
    price: 7.90 * 11, // 86.9 MAD
    oldPrice: null,
    images: ["images/14706551-2045063638640547.jpg"],
    rating: 4.8,
    description: "Sérum hydratant à l'acide hyaluronique de différents poids moléculaires pour une hydratation à plusieurs niveaux de la peau.",
    badge: "",
    stock: 38
    },
    {
    id: "to003",
    name: "AHA 30% + BHA 2% Peeling Solution",
    category: "Skincare",
    price: 8.90 * 11, // 97.9 MAD
    oldPrice: null,
    images: ["images/sol2.jpg"],
    rating: 4.6,
    description: "Solution exfoliante aux acides de fruits à utiliser 1-2 fois par semaine. Nettoie en profondeur et affine la texture de la peau.",
    badge: "sale",
    stock: 15
    },
    {
    id: "to004",
    name: "Caffeine Solution 5% + EGCG",
    category: "Skincare",
    price: 7.30 * 11, // 80.3 MAD
    oldPrice: 8.50 * 11, // 93.5 MAD
    images: ["images/sol3.webp"],
    rating: 4.4,
    description: "Solution concentrée en caféine et EGCG pour réduire les poches et cernes sous les yeux. Léger et rapidement absorbé.",
    badge: "sale",
    stock: 27
    },
    {
    id: "to005",
    name: "Glycolic Acid 7% Toning Solution",
    category: "Skincare",
    price: 10.20 * 11, // 112.2 MAD
    oldPrice: null,
    images: ["images/sol6.webp"],
    rating: 4.5,
    description: "Tonique exfoliant à l'acide glycolique pour affiner la texture de la peau, uniformiser le teint et réduire les imperfections.",
    badge: "new",
    stock: 33
    },
    {
    id: "to006",
    name: "Retinol 1% in Squalane",
    category: "Skincare",
    price: 6.80 * 11, // 74.8 MAD
    oldPrice: null,
    images: ["images/sol5.webp"],
    rating: 4.7,
    description: "Solution de rétinol dans du squalane pour réduire les signes visibles du vieillissement. À utiliser le soir.",
    badge: "",
    stock: 22
    },
    {
    id: "to007",
    name: "Ascorbic Acid 8% + Alpha Arbutin 2%",
    category: "Skincare",
    price: 11.00 * 11, // 121 MAD
    oldPrice: 12.50 * 11, // 137.5 MAD
    images: ["images/Ascorbic-acid-8-alpha-arbutin-2-30ml-2.jpg"],
    rating: 4.6,
    description: "Sérum éclaircissant à la vitamine C et alpha-arbutin pour uniformiser le teint et réduire les taches pigmentaires.",
    badge: "sale",
    stock: 19
    },
    {
    id: "to008",
    name: "Natural Moisturizing Factors + HA",
    category: "Skincare",
    price: 9.80 * 11, // 107.8 MAD
    oldPrice: null,
    images: ["images/UK200029807_ORDINARY_1.jpg"],
    rating: 4.3,
    description: "Crème hydratante quotidienne avec des facteurs naturels d'hydratation et acide hyaluronique. Texture légère non grasse.",
    badge: "",
    stock: 45
    },
    {
    id: "an001",
    name: "ANUA Heartleaf 77% Soothing Toner",
    category: "Skincare",
    price: 21.90 * 11, // 240.9 MAD
    oldPrice: null,
    images: ["images/anua-us-toner-heartleaf-77-soothing-toner-1161173062.webp"],
    rating: 4.8,
    description: "Toner apaisant à 77% d'extrait Heartleaf pour calmer les rougeurs et hydrater les peaux sensibles.",
    badge: "new",
    stock: 25
    },
    {
    id: "an002",
    name: "ANUA Heartleaf Pore Control Cleansing Oil",
    category: "Skincare",
    price: 24.50 * 11, // 269.5 MAD
    oldPrice: null,
    images: ["images/41tFi33Pi6L._SL1000_.jpg"],
    rating: 4.7,
    description: "Huile nettoyante légère pour dissoudre le maquillage et purifier les pores sans irriter.",
    badge: "",
    stock: 30
    },
    {
    id: "an003",
    name: "ANUA Niacinamide 10% + TXA 4% Serum",
    category: "Skincare",
    price: 18.90 * 11, // 207.9 MAD
    oldPrice: 21.00 * 11, // 231 MAD
    images: ["images/IMG-3543.webp"],
    rating: 4.6,
    description: "Sérum pour uniformiser le teint, réduire les taches et améliorer l’éclat de la peau.",
    badge: "sale",
    stock: 20
    },
    {
    id: "an004",
    name: "ANUA Peach 70% Niacinamide Serum",
    category: "Skincare",
    price: 22.40 * 11, // 246.4 MAD
    oldPrice: null,
    images: ["images/83816_1_1.webp"],
    rating: 4.7,
    description: "Sérum illuminateur à 70% d'extrait de pêche pour un teint éclatant et uniforme.",
    badge: "new",
    stock: 17
    },
    {
    id: "sf001",
    name: "Fenty Beauty Gloss Bomb Universal Lip Luminizer",
    category: "Makeup",
    price: 22.00 * 11, // 242 MAD
    oldPrice: null,
    images: ["images/OIP (6).webp"],
    rating: 4.7,
    description: "Gloss lèvres iconique de Fenty Beauty, avec brillance universelle et confort longue durée — effet glossy très populaire en 2025.",
    badge: "bestseller",
    stock: 35
    },
    {
    id: "sf002",
    name: "Rare Beauty Soft Pinch Matte Bouncy Blush",
    category: "Makeup",
    price: 28.00 * 11, // 308 MAD
    oldPrice: null,
    images: ["images/OIP (7).webp"],
    rating: 4.8,
    description: "Blush matifiant et léger, effet bonne mine naturel — très tendance pour un look frais et jeunesse.",
    badge: "new",
    stock: 20
    },
    {
    id: "dr001",
    name: "Dior Addict Lip Glow Oil",
    category: "Makeup",
    price: 40.00 * 11, // 440 MAD
    oldPrice: null,
    images: ["images/Y0124000_C012400001_E01_GHC.webp"],
    rating: 4.9,
    description: "Huile à lèvres ultra-brillante qui ravive la couleur naturelle des lèvres. Produit culte de Dior Beauty.",
    badge: "bestseller",
    stock: 32
    },
    {
    id: "dr002",
    name: "Dior Backstage Glow Face Palette",
    category: "Makeup",
    price: 48.00 * 11, // 528 MAD
    oldPrice: null,
    images: ["images/OIP (8).webp"],
    rating: 4.8,
    description: "Palette d'highlighters pour un glow lumineux et professionnel utilisée en backstage.",
    badge: "",
    stock: 20
    },
    {
    id: "dr003",
    name: "Dior Forever Skin Correct Concealer",
    category: "Makeup",
    price: 44.00 * 11, // 484 MAD
    oldPrice: null,
    images: ["images/3348901637503.jpg"],
    rating: 4.7,
    description: "Correcteur haute couvrance au fini naturel. Tient toute la journée sans marquer.",
    badge: "new",
    stock: 26
    },
    {
    id: "pr001",
    name: "Prada Monochrome Hyper Matte Lipstick",
    category: "Makeup",
    price: 45.00 * 11, // 495 MAD
    oldPrice: null,
    images: ["images/3a5f4315cc48bc5106ff13e64facdca7.avif"],
    rating: 4.6,
    description: "Rouge à lèvres mat intense avec une tenue ultra-longue, signé Prada Beauty.",
    badge: "",
    stock: 17
    },
    {
    id: "pr002",
    name: "Prada Dimensions Eyeshadow Palette",
    category: "Makeup",
    price: 62.00 * 11, // 682 MAD
    oldPrice: null,
    images: ["images/Eyeshadow_f4f65022eb.webp"],
    rating: 4.7,
    description: "Palette yeux minimaliste et moderne avec teintes neutres très pigmentées.",
    badge: "bestseller",
    stock: 14
    },
    {
    id: "hr001",
    name: "Hermès Rouge Hermès Satin Lipstick",
    category: "Makeup",
    price: 72.00 * 11, // 792 MAD
    oldPrice: null,
    images: ["images/239003811.webp"],
    rating: 4.9,
    description: "Rouge à lèvres iconique, packaging luxe et texture satinée très confortable.",
    badge: "bestseller",
    stock: 12
    },
    {
    id: "ha001",
    name: "Olaplex No. 4 Bond Maintenance Shampoo",
    category: "Hair",
    price: 28.00 * 11, // 308 MAD
    oldPrice: null,
    images: ["images/OlaplexNo4BondMaintenanceShampoo1000ml.webp"],
    rating: 4.5,
    description: "Shampooing réparateur qui renforce les liens de la fibre capillaire et réduit la casse — idéal pour cheveux abîmés ou sensibilisés.",
    badge: "",
    stock: 30
    },
    {
    id: "ha002",
    name: "K18 Leave‑In Molecular Repair Hair Mask",
    category: "Hair",
    price: 60.00 * 11, // 660 MAD
    oldPrice: null,
    images: ["images/50ml.webp"],
    rating: 4.7,
    description: "Masque réparateur sans rinçage qui reconstruit les liens de la kératine — idéal après coloration, lissage ou chaleur.",
    badge: "bestseller",
    stock: 18
    },
    {
    id: "ha003",
    name: "Gisou Honey Infused Hair Oil",
    category: "Hair",
    price: 45.00 * 11, // 495 MAD
    oldPrice: null,
    images: ["images/s2380285-main-zoom.jpg"],
    rating: 4.8,
    description: "Huile capillaire au miel qui nourrit, lisse et donne de la brillance sans alourdir — très populaire pour cheveux secs ou frisés.",
    badge: "",
    stock: 22
    },
    {
    id: "ha004",
    name: "Briogeo Don’t Despair, Repair! Deep Conditioning Mask",
    category: "Hair",
    price: 32.00 * 11, // 352 MAD
    oldPrice: null,
    images: ["images/curly-hair-with-fringe-296443-1637086226065-main.jpg"],
    rating: 4.6,
    description: "Masque hydratant intense pour cheveux secs ou fragilisés — aide à reconstruire la fibre capillaire et redonne douceur.",
    badge: "",
    stock: 25
    },
    {
    id: "ha005",
    name: "Oribe Gold Lust Repair & Restore Conditioner",
    category: "Hair",
    price: 56.00 * 11, // 616 MAD
    oldPrice: null,
    images: ["images/N47GT7GK_es_ES_0.avif"],
    rating: 4.7,
    description: "Après‑shampoing luxe qui conditionne en profondeur, renforce et améliore la brillance des cheveux — idéal pour cheveux abîmés ou déshydratés.",
    badge: "",
    stock: 20
    }
    ];
    

// === STATE ===
let cart = [];
let currentPage = 'home';
let currentCategory = 'all';
let currentSort = 'popular';
let searchQuery = '';

// === INITIALISATION ===
function init() {
    loadCart();
    updateCartCount();
    showPage('home');
    
    // Event listeners
    document.getElementById('searchInput').addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        if (currentPage === 'products') {
            renderProducts();
        }
    });
}

// === NAVIGATION ===
function showPage(page) {
    currentPage = page;
    const main = document.getElementById('mainContent');
    
    if (page === 'home') {
        main.innerHTML = `
            <section class="hero">
                <h1>Révélez Votre Beauté Naturelle</h1>
                <p>Découvrez notre collection exclusive de cosmétiques premium</p>
                <button class="btn" onclick="showPage('products')">Découvrir nos produits</button>
            </section>
            <div class="container">
                <h2 class="section-title">Produits Populaires</h2>
                <div class="products-grid" id="homeProducts"></div>
            </div>
        `;
        renderHomeProducts();
    } else if (page === 'products') {
        main.innerHTML = `
            <div class="container">
                <h2 class="section-title">Nos Produits</h2>
                <div class="filters">
                    <div class="filter-group">
                        <button class="filter-btn active" onclick="filterCategory('all')">Tous</button>
                        <button class="filter-btn" onclick="filterCategory('Skincare')">Skincare</button>
                        <button class="filter-btn" onclick="filterCategory('Makeup')">Makeup</button>
                        <button class="filter-btn" onclick="filterCategory('Fragrance')">Fragrance</button>
                        <button class="filter-btn" onclick="filterCategory('Hair')">Hair</button>
                    </div>
                    <select class="sort-select" onchange="sortProducts(this.value)">
                        <option value="popular">Populaire</option>
                        <option value="price-asc">Prix croissant</option>
                        <option value="price-desc">Prix décroissant</option>
                    </select>
                </div>
                <div class="products-grid" id="productsGrid"></div>
            </div>
        `;
        renderProducts();
    } else if (page === 'cart') {
        renderCart();
    }
}

// === RENDER PRODUCTS ===
function renderProducts() {
    let filtered = products.filter(p => {
        const matchCategory = currentCategory === 'all' || p.category === currentCategory;
        const matchSearch = p.name.toLowerCase().includes(searchQuery);
        return matchCategory && matchSearch;
    });

    // Sort
    if (currentSort === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
        filtered.sort((a, b) => b.price - a.price);
    } else {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    const grid = document.getElementById('productsGrid');
    if (filtered.length === 0) {
        grid.innerHTML = '<div class="empty-state"><h2>Aucun produit trouvé</h2></div>';
        return;
    }

    grid.innerHTML = filtered.map(p => createProductCard(p)).join('');
}

function renderHomeProducts() {
    const topProducts = [...products].sort((a, b) => b.rating - a.rating).slice(0, 6);
    document.getElementById('homeProducts').innerHTML = topProducts.map(p => createProductCard(p)).join('');
}

function createProductCard(product) {
    const stars = '⭐'.repeat(Math.floor(product.rating));
    const badge = product.badge === 'new' ? '<span class="product-badge badge-new">Nouveau</span>' :
                 product.badge === 'sale' ? '<span class="product-badge badge-sale">Promo</span>' : '';
    
    return `
        <div class="product-card">
            ${badge}
            <img src="${product.images[0]}" alt="${product.name}" class="product-image" onclick="showProductDetail('${product.id}')">
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    ${stars} <span style="color: var(--gray); margin-left: 0.3rem;">${product.rating}</span>
                </div>
                <div class="product-price">
                    <span class="price-current">${product.price.toFixed(2)} MAD</span>
                    ${product.oldPrice ? `<span class="price-old">${product.oldPrice.toFixed(2)} MAD</span>` : ''}
                </div>
                <button class="btn-add-cart" onclick="addToCart('${product.id}')">Ajouter au panier</button>
            </div>
        </div>
    `;
}

// === PRODUCT DETAIL ===
function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const similar = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);
    const stars = '⭐'.repeat(Math.floor(product.rating));

    document.getElementById('mainContent').innerHTML = `
        <div class="container">
            <div class="product-detail">
                <div class="product-gallery">
                    <img src="${product.images[0]}" alt="${product.name}" class="main-image" id="mainImage">
                    <div class="thumbnails">
                        ${product.images.map((img, i) => `
                            <img src="${img}" alt="${product.name}" class="thumbnail ${i === 0 ? 'active' : ''}" 
                                 onclick="changeMainImage('${img}', this)">
                        `).join('')}
                    </div>
                </div>
                <div class="product-detail-info">
                    <div class="product-category">${product.category}</div>
                    <h1>${product.name}</h1>
                    <div class="product-rating">
                        ${stars} <span style="color: var(--gray); margin-left: 0.5rem;">${product.rating} / 5</span>
                    </div>
                    <div class="product-price">
                        <span class="price-current">${product.price.toFixed(2)} MAD</span>
                        ${product.oldPrice ? `<span class="price-old">${product.oldPrice.toFixed(2)} MAD</span>` : ''}
                    </div>
                    <div class="product-description">
                        <p>${product.description}</p>
                    </div>
                    <div class="quantity-control">
                        <button class="quantity-btn" onclick="changeQuantity(-1)">-</button>
                        <input type="number" id="productQuantity" class="quantity-input" value="1" min="1" max="99">
                        <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
                    </div>
                    <button class="btn-add-cart" style="margin-top: 2rem;" onclick="addToCartWithQuantity('${product.id}')">
                        Ajouter au panier
                    </button>
                    <p style="margin-top: 1rem; color: var(--gray);">Stock disponible : ${product.stock} unités</p>
                </div>
            </div>
            ${similar.length > 0 ? `
                <div style="margin-top: 4rem;">
                    <h2 class="section-title">Produits similaires</h2>
                    <div class="products-grid">
                        ${similar.map(p => createProductCard(p)).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
    `;
}

function changeMainImage(imageSrc, thumbnail) {
    document.getElementById('mainImage').src = imageSrc;
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    thumbnail.classList.add('active');
}

function changeQuantity(delta) {
    const input = document.getElementById('productQuantity');
    let value = parseInt(input.value) + delta;
    value = Math.max(1, Math.min(99, value));
    input.value = value;
}

// === CART FUNCTIONS ===
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            quantity: quantity
        });
    }

    saveCart();
    updateCartCount();
    showToast(`${product.name} ajouté au panier`);
}

function addToCartWithQuantity(productId) {
    const quantity = parseInt(document.getElementById('productQuantity').value);
    addToCart(productId, quantity);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCart();
}

function updateCartItemQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, Math.min(99, quantity));
        saveCart();
        updateCartCount();
        renderCart();
    }
}

function clearCart() {
    if (confirm('Voulez-vous vraiment vider le panier ?')) {
        cart = [];
        saveCart();
        updateCartCount();
        renderCart();
    }
}

function renderCart() {
    const main = document.getElementById('mainContent');
    
    if (cart.length === 0) {
        main.innerHTML = `
            <div class="container">
                <div class="empty-state">
                    <h2>Votre panier est vide</h2>
                    <p style="margin: 1rem 0;">Découvrez nos produits et ajoutez vos favoris !</p>
                    <button class="btn" onclick="showPage('products')">Découvrir nos produits</button>
                </div>
            </div>
        `;
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.20;
    const total = subtotal + tax;

    main.innerHTML = `
        <div class="container">
            <h2 class="section-title">Mon Panier</h2>
            <div class="cart-container">
                <div class="cart-items">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                        <h3>${cart.length} article(s)</h3>
                        <button class="btn-remove" onclick="clearCart()">Vider le panier</button>
                    </div>
                    ${cart.map(item => `
                        <div class="cart-item">
                            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                            <div class="cart-item-details">
                                <h3>${item.name}</h3>
                                <p class="cart-item-price">${item.price.toFixed(2)} MAD</p>
                                <div class="quantity-control">
                                    <button class="quantity-btn" onclick="updateCartItemQuantity('${item.id}', ${item.quantity - 1})">-</button>
                                    <input type="number" class="quantity-input" value="${item.quantity}" 
                                           onchange="updateCartItemQuantity('${item.id}', parseInt(this.value))">
                                    <button class="quantity-btn" onclick="updateCartItemQuantity('${item.id}', ${item.quantity + 1})">+</button>
                                </div>
                            </div>
                            <div class="cart-item-actions">
                                <p class="cart-item-total">${(item.price * item.quantity).toFixed(2)} MAD</p>
                                <button class="btn-remove" onclick="removeFromCart('${item.id}')">Supprimer</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="cart-summary">
                    <h3 style="margin-bottom: 1rem;">Résumé de la commande</h3>
                    <div class="summary-row">
                        <span>Sous-total</span>
                        <span>${subtotal.toFixed(2)} MAD</span>
                    </div>
                    <div class="summary-row">
                        <span>TVA (20%)</span>
                        <span>${tax.toFixed(2)} MAD</span>
                    </div>
                    <div class="summary-row total">
                        <span>Total</span>
                        <span>${total.toFixed(2)} MAD</span>
                    </div>
                    <button class="btn-checkout" onclick="checkout()">Commander</button>
                </div>
            </div>
        </div>
    `;
}

function checkout() {
    if (cart.length === 0) return;
    
    // Créer le message WhatsApp
    let message = "🛍️ *Nouvelle Commande BeautyShop*\n\n";
    message += "📦 *Produits commandés:*\n";
    
    cart.forEach((item, index) => {
        message += `\n${index + 1}. *${item.name}*\n`;
        message += `   Quantité: ${item.quantity}\n`;
        message += `   Prix unitaire: ${item.price.toFixed(2)} MAD\n`;
        message += `   Sous-total: ${(item.price * item.quantity).toFixed(2)} MAD\n`;
    });
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.20;
    const total = subtotal + tax;
    
    message += `\n━━━━━━━━━━━━━━━━\n`;
    message += `💰 *Résumé financier:*\n`;
    message += `Sous-total: ${subtotal.toFixed(2)} MAD\n`;
    message += `TVA (20%): ${tax.toFixed(2)} MAD\n`;
    message += `*TOTAL: ${total.toFixed(2)} MAD*\n\n`;
    message += `Je souhaite passer cette commande. Merci !`;
    
    // Encoder le message pour URL
    const encodedMessage = encodeURIComponent(message);
    
    // Numéro WhatsApp (remplacez par votre numéro au format international sans + ni espaces)
    // Exemple: 212612345678 pour le Maroc
    const whatsappNumber = "212621924487"; // ⚠️ REMPLACEZ par votre numéro
    
    // Créer l'URL WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Ouvrir WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Message de confirmation
    showToast('Redirection vers WhatsApp...');
}

// === STORAGE ===
function saveCart() {
    localStorage.setItem('beautyshop_cart', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('beautyshop_cart');
    if (saved) {
        cart = JSON.parse(saved);
    }
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

// === MINI CART ===
function toggleMiniCart() {
    const miniCart = document.getElementById('miniCart');
    const isShown = miniCart.classList.contains('show');
    
    if (isShown) {
        miniCart.classList.remove('show');
    } else {
        renderMiniCart();
        miniCart.classList.add('show');
        setTimeout(() => {
            document.addEventListener('click', closeMiniCartOnClickOutside);
        }, 100);
    }
}

function closeMiniCartOnClickOutside(e) {
    const miniCart = document.getElementById('miniCart');
    const cartIcon = document.querySelector('.cart-icon');
    if (!miniCart.contains(e.target) && !cartIcon.contains(e.target)) {
        miniCart.classList.remove('show');
        document.removeEventListener('click', closeMiniCartOnClickOutside);
    }
}

function renderMiniCart() {
    const miniCart = document.getElementById('miniCart');
    
    if (cart.length === 0) {
        miniCart.innerHTML = '<p style="text-align: center; color: var(--gray);">Panier vide</p>';
        return;
    }

    const recentItems = cart.slice(-3).reverse();
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    miniCart.innerHTML = `
        <h3 style="margin-bottom: 1rem;">Panier (${cart.length})</h3>
        ${recentItems.map(item => `
            <div class="mini-cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div style="flex: 1;">
                    <p style="font-weight: 600;">${item.name}</p>
                    <p style="color: var(--gray); font-size: 0.9rem;">${item.quantity} x ${item.price.toFixed(2)} MAD</p>
                </div>
            </div>
        `).join('')}
        <div class="mini-cart-total">
            Total : ${total.toFixed(2)} MAD
        </div>
        <button class="btn-checkout" onclick="showPage('cart'); toggleMiniCart();">Voir le panier</button>
    `;
}

// === FILTERS & SORT ===
function filterCategory(category) {
    currentCategory = category;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderProducts();
}

function sortProducts(sortType) {
    currentSort = sortType;
    renderProducts();
}

// === TOAST ===
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// === INIT ===
init();
