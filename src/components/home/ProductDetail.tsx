import icon_logo_black from '@/assets/images/icon_logo_black.png';

interface ProductDetailProps {
  onGoDetail: (num: number) => void;
}

export default function ProductDetail({ onGoDetail }: ProductDetailProps) {
  return (
    <div
      className="pt-16 h-full bg-gray-50"
      style={{ fontFamily: '"Microsoft YaHei", sans-serif' }}
    >
      {/* 主内容区 */}
      <div className="mx-auto p-5 max-w-4xl min-h-[70vh]">
        <div className="font-medium text-3xl text-gray-800 text-center mb-8">
          <p className="font-medium text-3xl text-gray-800 leading-7">
            产品体验 — 感谢你们的支持和建议
          </p>
        </div>

        <p className="font-normal text-base text-gray-800 leading-7 mb-7">
          大家好，我是天乙神算创始人寻一，网站版本上线已有半个月，很多小伙伴们加入到了体验中，并给出了很多的好评和鼓励，我们由衷的感到欣慰，这既是对我们学术体系的认可，也是对我们团队价值观的认同。天乙对大家来说是一个命理测算平台，但他对我们来说是修行之路，以术入道，以道统术，希望有一天能够登临玄境，哈哈哈说远了~
        </p>

        <p className="font-normal text-base text-gray-800 leading-7 mb-7">
          天乙ai目前能达到中级命理师的水平，当用神喜忌取用正确时，ai认知的深度广度推理能力，都远超常人，这是目前ai最有优势的地方，且他处于不断的成长中，预计3个月-6个月，会达到高级命理师水平，目前高阶理法体系已构建，更多的是训练和调试，希望能早一些和大家见面。
        </p>

        <p className="font-normal text-base text-gray-800 leading-7 mb-7">
          人算终究无法算尽，且八字命理仅代表个人运势，最终呈现是和多重维度共振的结果，如家庭运势、公司运势、恋人运势、地缘运势、甚至国运。目前ai还是以"人"的理法体系为主，也许有一天他会创造自己的体系吧，目前我们的目标是把ai带到人类大师境界。
        </p>

        <p className="font-normal text-base text-gray-800 leading-7 mb-7">
          最近十天的试运行效果不错，以下是用户的一些评价（b站等公共平台），同时也感谢大家对我们的包容，无论是平台，还是命理体系，都在逐步优化，如果你使用中遇到了问题，甚至觉得不满意，也请及时和客服小姐姐沟通，我们都会尽力处理好。将命理产品做好，是我们不变的初心。
        </p>

        <div
          onClick={() => onGoDetail(2)}
          className="mx-auto w-39 h-13 leading-[52px] text-center text-lg text-black shadow-lg rounded-[26px] border-2 border-black cursor-pointer"
        >
          返回首页
        </div>
      </div>

      {/* 底部版权区 */}
      <div className="relative bg-white w-full h-47">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <img src={icon_logo_black} alt="天乙神算 Logo" className="h-8 w-33" />
          <div className="mt-4 font-normal text-lg text-gray-600">
            © 2025 天乙神算. 保留所有权利.
          </div>
        </div>
      </div>
    </div>
  );
}
