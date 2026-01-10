import { useStore } from '@tanstack/react-store';
import { languageStore } from '../../stores/languageStore';
import Footer from './Footer';
import mlai from '@/assets/images/mlai.png';
import gf from '@/assets/images/gf.png';
import about_bg from '@/assets/images/about_bg.png';

const imageMap: Record<string, string> = {
  'mlai.png': mlai,
  'gf.png': gf,
};

const aboutTexts = {
  'zh-CN': {
    items: [
      {
        title: '天乙神算 — 八字命理AI测算平台',
        image: 'mlai.png',
        detailId: 3,
      },
      {
        title: '产品体验 — 感谢你们的支持和建议',
        image: 'gf.png',
        detailId: 4,
      },
    ],
  },
  'en-US': {
    items: [
      {
        title: 'Tianyi Fortune — BaZi AI Fortune Platform',
        image: 'mlai.png',
        detailId: 3,
      },
      {
        title: 'Product Experience — Thank you for your support',
        image: 'gf.png',
        detailId: 4,
      },
    ],
  },
};

interface AboutViewProps {
  onGoDetail: (num: number) => void;
}

export default function AboutView({ onGoDetail }: AboutViewProps) {
  const { currentLanguage } = useStore(languageStore);
  const texts = aboutTexts[currentLanguage];

  return (
    <div
      style={{
        paddingTop: '65px',
        height: '100%',
        fontFamily: '"Microsoft YaHei", sans-serif',
        backgroundColor: '#f9fafb',
      }}
    >
      {/* 主内容区 */}
      <div
        style={{
          padding: '20px',
          paddingBottom: '200px',
          minHeight: '100vh',
        }}
      >
        {/* 背景标题区 */}
        <div
          style={{
            width: '100%',
            height: '320px',
            marginBottom: '52px',
            background: `url(${about_bg}) no-repeat`,
            backgroundSize: 'cover',
          }}
        ></div>

        {/* 产品网格 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            maxWidth: '1160px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            {texts.items.map((item, index) => (
              <div
                key={index}
                style={{
                  width: '30%',
                  margin: '20px 0 0 15px',
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
                  transition: 'transform 0.2s',
                  cursor: 'pointer',
                  flex: '0 0 auto',
                }}
                onClick={() => onGoDetail(item.detailId)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '250px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={imageMap[item.image]}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div
                  style={{
                    height: '72px',
                    lineHeight: '72px',
                    fontSize: '14px',
                    color: '#333',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}
                >
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
