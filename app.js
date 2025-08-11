// DeepTruth Application JavaScript

// Mock data from the provided JSON
const mockData = {
    recentDetections: [
        {
            id: "det_001",
            type: "video",
            title: "Political Rally Speech",
            platform: "Twitter",
            timestamp: "2025-08-11T09:15:00Z",
            authenticity_score: 23,
            status: "fake",
            region: "Delhi",
            language: "Hindi"
        },
        {
            id: "det_002", 
            type: "image",
            title: "Bollywood Actor Photo",
            platform: "Instagram",
            timestamp: "2025-08-11T09:10:00Z",
            authenticity_score: 89,
            status: "authentic",
            region: "Mumbai", 
            language: "English"
        },
        {
            id: "det_003",
            type: "text",
            title: "COVID Vaccine News",
            platform: "Facebook",
            timestamp: "2025-08-11T09:05:00Z", 
            authenticity_score: 15,
            status: "fake",
            region: "Tamil Nadu",
            language: "Tamil"
        }
    ],
    systemStats: {
        totalAnalyzed: 45782,
        fakeDetected: 12847,
        authenticVerified: 28935,
        inProgress: 24,
        accuracyRate: 94.2
    },
    blockchainRecords: [
        {
            txHash: "0x7d4f8b9a2e1c6f5d8b3a9e7f2c4d8b5a9e6f1c3d7b8e4f9a2c5d8b1e6f4a7c9d",
            contentHash: "QmYjtig7VJQ6XsnUjqqJvj7QaMcCAwtrgNdahSiFofrE7o",
            timestamp: "2025-08-11T09:15:30Z",
            verification: "authentic",
            confidence: 96.5
        },
        {
            txHash: "0x2a5b8c9d4e7f1a6b9c2d5e8f3a7b4c9d6e1f2a8c5b9d4e7f1a6b8c3d9e2f5a7b",
            contentHash: "QmNxFZ3v8HSV3qN8DZhNgYMBAjnrJGKKQhPk1JF1sDVcxQ",
            timestamp: "2025-08-11T09:12:45Z",
            verification: "manipulated", 
            confidence: 87.2
        }
    ],
    languages: [
        {code: "en", name: "English", native: "English"},
        {code: "hi", name: "Hindi", native: "हिंदी"},  
        {code: "ta", name: "Tamil", native: "தமிழ்"},
        {code: "te", name: "Telugu", native: "తెలుగు"},
        {code: "ml", name: "Malayalam", native: "മലയാളം"},
        {code: "gu", name: "Gujarati", native: "ગુજરાતી"},
        {code: "mr", name: "Marathi", native: "मराठी"}
    ],
    socialMediaFeeds: [
        {
            platform: "twitter",
            posts: [
                {
                    id: "tw_001",
                    content: "Breaking: Major policy announcement from government",
                    author: "@newschannel_in",
                    timestamp: "2025-08-11T09:20:00Z",
                    engagement: 1247,
                    risk_score: 85,
                    language: "en"
                },
                {
                    id: "tw_002", 
                    content: "सरकार की नई नीति की घोषणा",
                    author: "@hindi_news24",
                    timestamp: "2025-08-11T09:18:00Z",
                    engagement: 892,
                    risk_score: 23,
                    language: "hi"
                }
            ]
        }
    ],
    analyticsData: {
        detectionTrends: [
            {date: "2025-08-04", fake: 145, authentic: 389},
            {date: "2025-08-05", fake: 167, authentic: 421}, 
            {date: "2025-08-06", fake: 134, authentic: 356},
            {date: "2025-08-07", fake: 189, authentic: 445},
            {date: "2025-08-08", fake: 156, authentic: 398},
            {date: "2025-08-09", fake: 201, authentic: 467},
            {date: "2025-08-10", fake: 178, authentic: 423},
            {date: "2025-08-11", fake: 95, authentic: 234}
        ],
        platformBreakdown: {
            "Twitter": 34.5,
            "Facebook": 28.2, 
            "Instagram": 19.8,
            "YouTube": 12.3,
            "Others": 5.2
        },
        regionalData: {
            "Delhi": 22.1,
            "Mumbai": 18.7,
            "Bangalore": 15.3,
            "Chennai": 12.4,
            "Kolkata": 10.8,
            "Others": 20.7
        }
    },
    translations: {
        en: {
            dashboard: "Dashboard",
            upload_content: "Upload Content", 
            monitoring: "Social Monitoring",
            blockchain: "Blockchain Ledger",
            reports: "Reports & Analytics",
            settings: "Settings",
            total_analyzed: "Total Analyzed",
            fake_detected: "Fake Detected", 
            authentic_verified: "Authentic Verified",
            accuracy_rate: "Accuracy Rate",
            recent_detections: "Recent Detections",
            upload_file: "Upload File for Analysis",
            enter_url: "Enter URL to Analyze"
        },
        hi: {
            dashboard: "डैशबोर्ड",
            upload_content: "सामग्री अपलोड करें",
            monitoring: "सामाजिक निगरानी", 
            blockchain: "ब्लॉकचेन लेज़र",
            reports: "रिपोर्ट और विश्लेषण",
            settings: "सेटिंग्स",
            total_analyzed: "कुल विश्लेषित",
            fake_detected: "नकली का पता लगाया",
            authentic_verified: "प्रामाणिक सत्यापित",
            accuracy_rate: "सटीकता दर",
            recent_detections: "हालिया पहचान",
            upload_file: "विश्लेषण के लिए फ़ाइल अपलोड करें",
            enter_url: "विश्लेषण के लिए URL दर्ज करें"
        },
        ta: {
            dashboard: "டாஷ்போர்டு",
            upload_content: "உள்ளடக்கத்தை பதிவேற்றவும்",
            monitoring: "சமூக கண்காணிப்பு",
            blockchain: "பிளாக்செயின் லெட்ஜர்", 
            reports: "அறிக்கைகள் & பகுப்பாய்வு",
            settings: "அமைப்புகள்",
            total_analyzed: "மொத்த பகுப்பாய்வு",
            fake_detected: "போலியானது கண்டறியப்பட்டது",
            authentic_verified: "உண்மையான சரிபார்க்கப்பட்டது", 
            accuracy_rate: "துல்லியம் விகிதம்",
            recent_detections: "சமீபத்திய கண்டுபிடிப்புகள்",
            upload_file: "பகுப்பாய்விற்கு கோப்பை பதிவேற்றவும்",
            enter_url: "பகுப்பாய்விற்கு URL ஐ உள்ளிடவும்"
        }
    }
};

// Global state
let currentLanguage = 'en';
let currentTheme = 'light';
let charts = {};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupThemeToggle();
    setupLanguageSelector();
    setupFileUpload();
    setupUrlAnalysis();
    initializeDashboard();
    initializeMonitoring();
    initializeBlockchain();
    initializeReports();
    simulateRealTimeUpdates();
    updateTranslations();
}

// Navigation Setup
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link and corresponding section
            link.classList.add('active');
            const sectionId = link.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            if (section) {
                section.classList.add('active');
                
                // Initialize section-specific functionality
                if (sectionId === 'reports') {
                    initializeCharts();
                }
            }
        });
    });
}

// Theme Toggle
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-color-scheme', currentTheme);
        themeToggle.innerHTML = currentTheme === 'light' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
        
        // Update charts if they exist
        Object.values(charts).forEach(chart => {
            if (chart) {
                chart.update();
            }
        });
    });
}

// Language Selector
function setupLanguageSelector() {
    const languageSelect = document.getElementById('languageSelect');
    languageSelect.addEventListener('change', (e) => {
        currentLanguage = e.target.value;
        updateTranslations();
        showToast('Language updated successfully', 'success');
    });
}

// Translation System
function updateTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    const translations = mockData.translations[currentLanguage] || mockData.translations.en;
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });
}

// File Upload Setup
function setupFileUpload() {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    
    uploadArea.addEventListener('click', () => {
        fileInput.click();
    });
    
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        const files = e.dataTransfer.files;
        handleFileUpload(files);
    });
    
    fileInput.addEventListener('change', (e) => {
        const files = e.target.files;
        handleFileUpload(files);
    });
}

// URL Analysis Setup
function setupUrlAnalysis() {
    const analyzeUrlBtn = document.getElementById('analyzeUrlBtn');
    const urlInput = document.getElementById('urlInput');
    
    analyzeUrlBtn.addEventListener('click', () => {
        const url = urlInput.value.trim();
        if (url) {
            analyzeUrl(url);
        } else {
            showToast('Please enter a valid URL', 'error');
        }
    });
    
    urlInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            analyzeUrlBtn.click();
        }
    });
}

// File Upload Handler
function handleFileUpload(files) {
    if (files.length === 0) return;
    
    Array.from(files).forEach(file => {
        analyzeFile(file);
    });
}

// File Analysis Simulation
function analyzeFile(file) {
    const analysisResults = document.getElementById('analysisResults');
    const progressFill = document.getElementById('analysisProgress');
    const progressText = document.getElementById('progressText');
    const resultContent = document.getElementById('resultContent');
    
    analysisResults.classList.remove('hidden');
    
    // Simulate analysis progress
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 20;
        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
            showAnalysisResults(file);
        }
        
        progressFill.style.width = `${progress}%`;
        progressText.textContent = progress < 100 ? `Analyzing... ${Math.round(progress)}%` : 'Analysis Complete';
    }, 200);
}

// URL Analysis Simulation
function analyzeUrl(url) {
    const analysisResults = document.getElementById('analysisResults');
    const progressFill = document.getElementById('analysisProgress');
    const progressText = document.getElementById('progressText');
    
    analysisResults.classList.remove('hidden');
    
    // Simulate analysis progress
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 25;
        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
            showUrlAnalysisResults(url);
        }
        
        progressFill.style.width = `${progress}%`;
        progressText.textContent = progress < 100 ? `Analyzing URL... ${Math.round(progress)}%` : 'Analysis Complete';
    }, 150);
}

// Show Analysis Results
function showAnalysisResults(file) {
    const resultContent = document.getElementById('resultContent');
    const authenticityScore = Math.round(Math.random() * 100);
    const isAuthentic = authenticityScore > 50;
    
    resultContent.innerHTML = `
        <div class="analysis-result">
            <div class="result-header">
                <h4>${file.name}</h4>
                <div class="authenticity-score ${isAuthentic ? 'authentic' : 'fake'}">
                    ${authenticityScore}% ${isAuthentic ? 'Authentic' : 'Likely Fake'}
                </div>
            </div>
            <div class="result-details">
                <div class="detail-grid">
                    <div class="detail-item">
                        <label>File Type:</label>
                        <span>${file.type}</span>
                    </div>
                    <div class="detail-item">
                        <label>File Size:</label>
                        <span>${formatFileSize(file.size)}</span>
                    </div>
                    <div class="detail-item">
                        <label>Analysis Time:</label>
                        <span>${(Math.random() * 2 + 1).toFixed(1)}s</span>
                    </div>
                    <div class="detail-item">
                        <label>Confidence Level:</label>
                        <span>${(Math.random() * 20 + 80).toFixed(1)}%</span>
                    </div>
                </div>
                <div class="technical-analysis">
                    <h5>Technical Analysis:</h5>
                    <ul>
                        <li>Metadata Analysis: ${Math.random() > 0.5 ? 'Clean' : 'Modified'}</li>
                        <li>Pixel Pattern Analysis: ${Math.random() > 0.3 ? 'Natural' : 'Artificial patterns detected'}</li>
                        <li>Compression Artifacts: ${Math.random() > 0.4 ? 'Consistent' : 'Inconsistent'}</li>
                        <li>Face/Object Detection: ${Math.random() > 0.6 ? 'Genuine' : 'Potential manipulation'}</li>
                    </ul>
                </div>
                <div class="blockchain-info">
                    <h5>Blockchain Verification:</h5>
                    <p>Content hash: ${generateMockHash()}</p>
                    <p>Verification status: Pending blockchain confirmation</p>
                </div>
            </div>
        </div>
    `;
    
    showToast(`Analysis complete: ${authenticityScore}% ${isAuthentic ? 'authentic' : 'fake'}`, isAuthentic ? 'success' : 'error');
}

// Show URL Analysis Results
function showUrlAnalysisResults(url) {
    const resultContent = document.getElementById('resultContent');
    const riskScore = Math.round(Math.random() * 100);
    const isSafe = riskScore < 30;
    
    resultContent.innerHTML = `
        <div class="analysis-result">
            <div class="result-header">
                <h4>URL Analysis: ${url}</h4>
                <div class="risk-score ${isSafe ? 'low' : 'high'}">
                    ${riskScore}% Risk Score
                </div>
            </div>
            <div class="result-details">
                <div class="detail-grid">
                    <div class="detail-item">
                        <label>Domain Age:</label>
                        <span>${Math.round(Math.random() * 5 + 1)} years</span>
                    </div>
                    <div class="detail-item">
                        <label>SSL Certificate:</label>
                        <span>${Math.random() > 0.2 ? 'Valid' : 'Invalid/Missing'}</span>
                    </div>
                    <div class="detail-item">
                        <label>Reputation Score:</label>
                        <span>${Math.round(Math.random() * 50 + 50)}/100</span>
                    </div>
                    <div class="detail-item">
                        <label>Content Type:</label>
                        <span>${['News Article', 'Social Media Post', 'Blog Post', 'Forum Discussion'][Math.floor(Math.random() * 4)]}</span>
                    </div>
                </div>
                <div class="url-checks">
                    <h5>Security Checks:</h5>
                    <ul>
                        <li>Phishing Database: ${Math.random() > 0.8 ? 'Flagged' : 'Clean'}</li>
                        <li>Malware Scan: ${Math.random() > 0.9 ? 'Threats detected' : 'Clean'}</li>
                        <li>Content Authenticity: ${Math.random() > 0.4 ? 'Verified sources' : 'Unverified claims'}</li>
                        <li>Misinformation Check: ${Math.random() > 0.3 ? 'Fact-checked' : 'Potentially misleading'}</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
    
    showToast(`URL analysis complete: ${riskScore}% risk score`, isSafe ? 'success' : 'warning');
}

// Dashboard Initialization
function initializeDashboard() {
    updateSystemStats();
    renderRecentDetections();
    initializeTrendsChart();
}

// Update System Statistics
function updateSystemStats() {
    const stats = mockData.systemStats;
    
    document.getElementById('totalAnalyzed').textContent = formatNumber(stats.totalAnalyzed);
    document.getElementById('fakeDetected').textContent = formatNumber(stats.fakeDetected);
    document.getElementById('authenticVerified').textContent = formatNumber(stats.authenticVerified);
    document.getElementById('accuracyRate').textContent = `${stats.accuracyRate}%`;
}

// Render Recent Detections
function renderRecentDetections() {
    const container = document.getElementById('recentDetectionsList');
    const detections = mockData.recentDetections;
    
    container.innerHTML = detections.map(detection => `
        <div class="detection-item">
            <div class="detection-type ${detection.type}">
                <i class="fas fa-${getTypeIcon(detection.type)}"></i>
            </div>
            <div class="detection-info">
                <h4>${detection.title}</h4>
                <div class="detection-meta">
                    <span><i class="fas fa-globe"></i> ${detection.platform}</span>
                    <span><i class="fas fa-map-marker-alt"></i> ${detection.region}</span>
                    <span><i class="fas fa-clock"></i> ${formatTime(detection.timestamp)}</span>
                </div>
            </div>
            <div class="authenticity-score ${detection.status}">
                ${detection.authenticity_score}%
            </div>
        </div>
    `).join('');
}

// Initialize Trends Chart
function initializeTrendsChart() {
    const ctx = document.getElementById('trendsChart');
    if (!ctx) return;
    
    const data = mockData.analyticsData.detectionTrends;
    
    charts.trends = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(d => formatDate(d.date)),
            datasets: [
                {
                    label: 'Fake Content',
                    data: data.map(d => d.fake),
                    borderColor: '#DB4545',
                    backgroundColor: 'rgba(219, 69, 69, 0.1)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Authentic Content',
                    data: data.map(d => d.authentic),
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Social Media Monitoring
function initializeMonitoring() {
    renderSocialFeed();
    simulateLiveFeed();
}

function renderSocialFeed() {
    const container = document.getElementById('socialFeed');
    
    // Generate mock social media posts
    const mockPosts = [
        {
            platform: 'twitter',
            content: 'Breaking: Major policy announcement expected tomorrow',
            author: '@newschannel_in',
            engagement: 1247,
            risk_score: 85,
            timestamp: new Date()
        },
        {
            platform: 'facebook',
            content: 'Viral video showing alleged government meeting',
            author: 'News Update',
            engagement: 892,
            risk_score: 15,
            timestamp: new Date(Date.now() - 300000)
        },
        {
            platform: 'instagram',
            content: 'Celebrity spotted at undisclosed location',
            author: '@bollywood_insider',
            engagement: 2341,
            risk_score: 45,
            timestamp: new Date(Date.now() - 600000)
        }
    ];
    
    container.innerHTML = mockPosts.map(post => `
        <div class="feed-item">
            <div class="feed-header">
                <div class="platform-badge ${post.platform}">
                    <i class="fab fa-${post.platform}"></i>
                    ${post.platform.toUpperCase()}
                </div>
                <div class="risk-level ${post.risk_score > 60 ? 'high' : 'low'}">
                    ${post.risk_score}% Risk
                </div>
            </div>
            <div class="feed-content">${post.content}</div>
            <div class="feed-meta">
                <span>${post.author}</span>
                <span>${post.engagement} interactions</span>
                <span>${formatTime(post.timestamp.toISOString())}</span>
            </div>
        </div>
    `).join('');
}

function simulateLiveFeed() {
    setInterval(() => {
        // Simulate new posts appearing
        const container = document.getElementById('socialFeed');
        if (container && Math.random() > 0.7) {
            const newPost = createMockPost();
            const postElement = document.createElement('div');
            postElement.innerHTML = `
                <div class="feed-item" style="opacity: 0; transform: translateY(-20px);">
                    <div class="feed-header">
                        <div class="platform-badge ${newPost.platform}">
                            <i class="fab fa-${newPost.platform}"></i>
                            ${newPost.platform.toUpperCase()}
                        </div>
                        <div class="risk-level ${newPost.risk_score > 60 ? 'high' : 'low'}">
                            ${newPost.risk_score}% Risk
                        </div>
                    </div>
                    <div class="feed-content">${newPost.content}</div>
                    <div class="feed-meta">
                        <span>${newPost.author}</span>
                        <span>${newPost.engagement} interactions</span>
                        <span>Just now</span>
                    </div>
                </div>
            `;
            
            container.insertBefore(postElement.firstElementChild, container.firstChild);
            
            // Animate the new post
            setTimeout(() => {
                const newPostEl = container.firstElementChild;
                newPostEl.style.transition = 'all 0.3s ease';
                newPostEl.style.opacity = '1';
                newPostEl.style.transform = 'translateY(0)';
            }, 100);
            
            // Remove old posts if too many
            if (container.children.length > 10) {
                container.removeChild(container.lastElementChild);
            }
        }
    }, 5000);
}

// Blockchain Initialization
function initializeBlockchain() {
    renderBlockchainRecords();
}

function renderBlockchainRecords() {
    const container = document.getElementById('blockchainRecords');
    const records = mockData.blockchainRecords;
    
    container.innerHTML = records.map(record => `
        <div class="blockchain-record">
            <div class="record-header">
                <div class="tx-hash">${record.txHash.substring(0, 20)}...</div>
                <div class="verification-status ${record.verification}">
                    ${record.verification.toUpperCase()}
                </div>
            </div>
            <div class="record-details">
                <div><strong>Content Hash:</strong> ${record.contentHash}</div>
                <div><strong>Timestamp:</strong> ${formatTime(record.timestamp)}</div>
                <div><strong>Confidence:</strong> ${record.confidence}%</div>
                <div><strong>Verification:</strong> ${record.verification}</div>
            </div>
        </div>
    `).join('');
}

// Reports & Analytics
function initializeReports() {
    setTimeout(initializeCharts, 100); // Delay to ensure DOM is ready
}

function initializeCharts() {
    initializePlatformChart();
    initializeRegionalChart();
}

function initializePlatformChart() {
    const ctx = document.getElementById('platformChart');
    if (!ctx) return;
    
    if (charts.platform) {
        charts.platform.destroy();
    }
    
    const data = mockData.analyticsData.platformBreakdown;
    
    charts.platform = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(data),
            datasets: [{
                data: Object.values(data),
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function initializeRegionalChart() {
    const ctx = document.getElementById('regionalChart');
    if (!ctx) return;
    
    if (charts.regional) {
        charts.regional.destroy();
    }
    
    const data = mockData.analyticsData.regionalData;
    
    charts.regional = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(data),
            datasets: [{
                label: 'Detection Percentage',
                data: Object.values(data),
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 25
                }
            }
        }
    });
}

// Real-time Updates Simulation
function simulateRealTimeUpdates() {
    setInterval(() => {
        // Update statistics slightly
        mockData.systemStats.totalAnalyzed += Math.floor(Math.random() * 3);
        if (Math.random() > 0.7) {
            mockData.systemStats.fakeDetected += 1;
        } else {
            mockData.systemStats.authenticVerified += 1;
        }
        
        updateSystemStats();
    }, 10000);
}

// Toast Notifications
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    const toastIcon = toast.querySelector('.toast-icon');
    const toastMessage = toast.querySelector('.toast-message');
    
    // Set icon based on type
    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        warning: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle'
    };
    
    toastIcon.className = `toast-icon ${icons[type] || icons.info}`;
    toastMessage.textContent = message;
    
    toast.classList.remove('hidden');
    toast.classList.add('show');
    
    // Auto hide after 4 seconds
    setTimeout(() => {
        hideToast();
    }, 4000);
    
    // Setup close button
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.onclick = hideToast;
}

function hideToast() {
    const toast = document.getElementById('toast');
    toast.classList.remove('show');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 300);
}

// Utility Functions
function formatNumber(num) {
    return new Intl.NumberFormat().format(num);
}

function formatTime(timestamp) {
    return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
        Math.floor((new Date(timestamp) - new Date()) / 60000), 'minute'
    );
}

function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function formatFileSize(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    if (bytes === 0) return '0 Bytes';
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
}

function getTypeIcon(type) {
    const icons = {
        video: 'video',
        image: 'image',
        text: 'file-text',
        audio: 'music'
    };
    return icons[type] || 'file';
}

function generateMockHash() {
    return 'Qm' + Math.random().toString(36).substr(2, 42);
}

function createMockPost() {
    const platforms = ['twitter', 'facebook', 'instagram'];
    const contents = [
        'Breaking: New developments in ongoing investigation',
        'Exclusive: Behind the scenes footage revealed',
        'Trending: Public reaction to recent announcement',
        'Alert: Verification needed for viral content',
        'Update: Official statement released'
    ];
    const authors = ['@newsupdate', '@verification_team', '@public_alert', '@fact_checker'];
    
    return {
        platform: platforms[Math.floor(Math.random() * platforms.length)],
        content: contents[Math.floor(Math.random() * contents.length)],
        author: authors[Math.floor(Math.random() * authors.length)],
        engagement: Math.floor(Math.random() * 5000 + 100),
        risk_score: Math.floor(Math.random() * 100),
        timestamp: new Date()
    };
}