import home_bg from '@/assets/images/home_bg.png';
import icon_logo_black from '@/assets/images/icon_logo_black.png';

interface AboutMyProps {
  onGoDetail: (num: number) => void;
}

export default function AboutMy({ onGoDetail }: AboutMyProps) {
  return (
    <div className="pt-16 h-full bg-gray-50">
      <div className="mx-auto px-5 max-w-4xl min-h-screen">
        <div className="font-medium text-3xl text-gray-800 text-center mb-8">
          <p className="font-medium text-3xl text-gray-800 leading-7 m-8">
            天乙神算 — 八字命理AI测算平台
          </p>
          <img src={home_bg} alt="" className="w-full rounded-xl" />
        </div>

        <p className="font-normal text-base text-gray-800 leading-7 mb-7">
          于2025年春季正式发布上线，是一家以东方术数体系为根基、人工智能技术为引擎的创新型企业。公司秉承"融合古今智慧，赋能精准决策"的使命，致力于通过大语言模型（LLM）与玄学理法的深度融合，推动东方术数在全球范围的科学化传播与场景化落地。
        </p>

        <p className="font-normal text-base text-gray-800 leading-7 mb-7">
          团队以"专业理法体系"为核心竞争力，以十万级真实案例、20年行业经验为根基，将八字命理等传统术数模型转化为可计算的AI算法。通过自研的命理大语言模型（Metaphysical
          LLM），实现命理推演的标准化、交互化与可视化，突破传统术数的学习壁垒与应用局限。
        </p>

        <p className="font-normal text-base text-gray-800 leading-7 mb-7">
          创始人寻一，早年任职上市公司负责资本运作，因特殊奇遇而进入玄学领域，又历经十年名师遍访、八年全职从业，深感术数高阶理论的认知壁垒。创立天乙神算的初心，是借力AI破解'传统玄学曲高和寡'之困，让造物之奇与术数之精，成为可被普罗大众理解的生活智慧。
        </p>

        <p className="font-normal text-base text-gray-800 leading-7 mb-7">
          天乙神算上线以来，凭借其专业性与实用性，在公开平台上赢得了大量用户的好评与积极反馈，众多宝贵建议已被采纳并融入产品迭代。公司始终秉承开放共享的发展理念，致力于通过东方数术的智慧工具，赋能用户深度在自我认知，洞悉未来。同时，平台也为易学爱好者及从业者，打造了AI赋能的高效工具，助力其专业水平实现跃升，共同推动国学文化的发展与传承。
        </p>

        <div
          onClick={() => onGoDetail(2)}
          className="mx-auto w-[156px] h-[52px] leading-[52px] text-center text-lg text-black rounded-full border-2 border-black cursor-pointer shadow-[0px_6px_12px_1px_rgba(0,0,0,0.16)]"
        >
          返回首页
        </div>
      </div>

      <div className="relative bg-white text-white px-5 w-full h-[187px]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <img src={icon_logo_black} alt="" className="w-[134px] h-[34px]" />
          <div className="mt-4 font-normal text-lg text-gray-600">
            © 2025 天乙神算. 保留所有权利.
          </div>
        </div>
      </div>
    </div>
  );
}
