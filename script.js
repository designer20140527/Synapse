// FAQ 手风琴交互
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        const isActive = accordionItem.classList.contains('active');
        
        // 关闭所有其他项
        document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // 切换当前项
        if (!isActive) {
            accordionItem.classList.add('active');
        }
    });
});

// Header 滚动效果
const nav = document.querySelector('nav');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    lastScrollY = window.scrollY;
});

// 配置粒子效果
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#a5a7f3'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.15,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#a5a7f3',
            opacity: 0.15,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.5
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// 背景图片滚动动画
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const viewportHeight = window.innerHeight;
    const scrollProgress = Math.min(scrolled / viewportHeight, 1);
    
    // 应用缩放和透明度效果
    document.documentElement.style.setProperty(
        '--overlay-scale', 
        `${1 + (scrollProgress * 0.8)}` // 增加放大倍数
    );
    document.documentElement.style.setProperty(
        '--overlay-opacity', 
        `${0.25 * (1 - scrollProgress)}` // 从 0.25 逐渐减小到 0
    );
});

// 添加 CSS 变量
document.documentElement.style.setProperty('--overlay-scale', '1');
document.documentElement.style.setProperty('--overlay-opacity', '0.25');

// 更新背景样式
const style = document.createElement('style');
style.textContent = `
    .hero-section::before {
        transform: scale(var(--overlay-scale)) !important;
        opacity: var(--overlay-opacity) !important;
    }
    .hero-section::after {
        transform: translateX(-50%) scale(var(--overlay-scale)) !important;
        opacity: var(--overlay-opacity) !important;
    }
`;
document.head.appendChild(style); 