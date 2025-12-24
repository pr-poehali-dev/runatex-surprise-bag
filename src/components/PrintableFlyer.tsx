import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const PrintableFlyer = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    if (typeof window !== 'undefined' && 'print' in window) {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 py-12 px-6">
      <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center print:hidden">
        <h1 className="font-heading text-3xl font-bold text-white">Макет для печати</h1>
        <div className="flex gap-3">
          <Button onClick={handleDownloadPDF} size="lg" className="bg-gray-700 hover:bg-gray-600">
            <Icon name="Download" className="mr-2" size={20} />
            Сохранить PDF
          </Button>
          <Button onClick={handlePrint} variant="outline" size="lg" className="border-gray-600 text-white hover:bg-gray-700">
            <Icon name="Printer" className="mr-2" size={20} />
            Печать
          </Button>
        </div>
      </div>

      <div className="print-flyer bg-gray-900 mx-auto shadow-2xl" style={{ width: '210mm', height: '297mm' }}>
        <div className="relative h-full flex flex-col justify-between" style={{ padding: '8mm' }}>
          <div className="flex items-center justify-between mb-8">
            <img 
              src="https://cdn.poehali.dev/files/Logo.PNG"
              alt="Runa Tex Logo"
              className="object-contain"
              style={{ height: '60px' }}
            />
            <div className="text-right">
              <p className="text-gray-400 text-sm">Эксклюзивное предложение</p>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="text-center mb-10">
              <h1 className="font-heading text-6xl font-bold text-white mb-6 leading-tight">
                Сумочка-сюрприз
              </h1>
              
              <p className="text-2xl text-gray-300 mb-4 font-light">
                1,5 кг тканевого волшебства
              </p>
              <p className="text-xl text-gray-400 mb-8">
                Ни один набор не повторяется
              </p>

              <div className="max-w-3xl mx-auto mb-10">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Тут и нежные однотонные отрезки, и принты-истории, и лоскуты разной длины — 
                  всё, как в сундуке у феи творчества.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-gray-800 rounded-lg border border-gray-700">
                <div className="w-14 h-14 rounded-full bg-gray-700 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-heading text-lg font-bold mb-2 text-white">Уникальность</h3>
                <p className="text-sm text-gray-400 leading-tight">
                  Каждый набор собран вручную
                </p>
              </div>

              <div className="text-center p-6 bg-gray-800 rounded-lg border border-gray-700">
                <div className="w-14 h-14 rounded-full bg-gray-700 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="font-heading text-lg font-bold mb-2 text-white">Качество</h3>
                <p className="text-sm text-gray-400 leading-tight">
                  Отборные ткани от Runa Tex
                </p>
              </div>

              <div className="text-center p-6 bg-gray-800 rounded-lg border border-gray-700">
                <div className="w-14 h-14 rounded-full bg-gray-700 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="font-heading text-lg font-bold mb-2 text-white">Вдохновение</h3>
                <p className="text-sm text-gray-400 leading-tight">
                  Идеальный старт для проекта
                </p>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-8 rounded-xl mb-10 max-w-3xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎁</span>
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold mb-3 text-white">
                    Идеальный подарок к праздникам
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Ищете особенный подарок для творческого человека? Сумочка-сюрприз — это целый мир возможностей.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-gray-700 rounded-full text-sm font-semibold text-gray-200">Новый год</span>
                    <span className="px-4 py-2 bg-gray-700 rounded-full text-sm font-semibold text-gray-200">День рождения</span>
                    <span className="px-4 py-2 bg-gray-700 rounded-full text-sm font-semibold text-gray-200">8 марта</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl text-gray-400 italic mb-6">
                Не вскрывать. Не трогать. Просто взять — и вдохновиться.
              </p>
              
              <h2 className="font-heading text-4xl font-bold text-white mb-2">
                Заберите свой — пока он есть
              </h2>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex items-center justify-between">
            <div>
              <p className="font-heading text-2xl font-bold text-white">Runa Tex</p>
              <p className="text-gray-400">где ткань становится историей</p>
            </div>
            <img 
              src="https://cdn.poehali.dev/files/Logo.PNG"
              alt="Runa Tex Logo"
              className="object-contain opacity-50"
              style={{ height: '40px' }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-8 print:hidden">
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
          <h3 className="font-heading text-xl font-bold mb-4 text-white">📋 Инструкция для типографии</h3>
          <ul className="space-y-2 text-gray-400">
            <li>• <strong className="text-white">Формат:</strong> A4 (210×297 мм) — одностраничный</li>
            <li>• <strong className="text-white">Стиль:</strong> Тёмная сдержанная тема</li>
            <li>• <strong className="text-white">Разрешение:</strong> Оптимизировано для печати</li>
            <li>• <strong className="text-white">Отступы:</strong> 8мм от края (безопасная зона)</li>
            <li>• <strong className="text-white">Формат файла:</strong> Сохраните как PDF через браузер (Ctrl+P → Сохранить как PDF)</li>
          </ul>
        </div>
      </div>

      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          
          body {
            margin: 0;
            padding: 0;
          }
          
          .print-flyer {
            width: 210mm !important;
            height: 297mm !important;
            margin: 0 !important;
            box-shadow: none !important;
            page-break-after: avoid;
          }
          
          .print\\:hidden {
            display: none !important;
          }
        }
        
        @media screen {
          .print-flyer {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          }
        }
      `}</style>
    </div>
  );
};

export default PrintableFlyer;
