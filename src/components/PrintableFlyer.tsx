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
    <div className="min-h-screen bg-[#1C1D20] py-12 px-6">
      <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center print:hidden">
        <h1 className="font-heading text-3xl font-bold text-white">Макет для печати</h1>
        <div className="flex gap-3">
          <Button onClick={handleDownloadPDF} size="lg" className="bg-[#2b5797] hover:bg-[#234779]">
            <Icon name="Download" className="mr-2" size={20} />
            Сохранить PDF
          </Button>
          <Button onClick={handlePrint} variant="outline" size="lg" className="border-[#2b5797] text-white hover:bg-[#2b5797]/20">
            <Icon name="Printer" className="mr-2" size={20} />
            Печать
          </Button>
        </div>
      </div>

      <div className="print-flyer bg-white mx-auto shadow-2xl" style={{ width: '210mm', height: '297mm' }}>
        <div className="relative h-full flex flex-col" style={{ padding: '10mm' }}>
          <div className="flex items-center justify-between mb-10 pb-6 border-b-2 border-[#2b5797]">
            <img 
              src="https://cdn.poehali.dev/files/Logo.PNG"
              alt="Runa Tex Logo"
              className="object-contain"
              style={{ height: '70px' }}
            />
            <div className="text-right">
              <p className="text-[#2b5797] font-bold text-lg">8-800-250-32-55</p>
              <p className="text-gray-600 text-sm">Магазин тканей RUNA TEX</p>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="text-center mb-8">
              <div className="inline-block px-6 py-2 bg-[#2b5797] text-white rounded-md mb-6">
                <span className="text-sm font-bold uppercase tracking-wide">Эксклюзивное предложение</span>
              </div>
              
              <h1 className="font-heading text-6xl font-bold text-[#1C1D20] mb-6 leading-tight">
                Сумочка-сюрприз
              </h1>
              
              <p className="text-3xl text-[#2b5797] mb-4 font-bold">
                1,5 кг тканевого волшебства
              </p>
              <p className="text-xl text-gray-700 mb-8 font-medium">
                Ни один набор не повторяется
              </p>

              <div className="max-w-3xl mx-auto mb-10">
                <p className="text-lg text-gray-800 leading-relaxed">
                  Тут и нежные однотонные отрезки, и принты-истории, и лоскуты разной длины — 
                  всё, как в сундуке у феи творчества.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-gray-50 rounded-lg border-2 border-[#2b5797]/20">
                <div className="w-16 h-16 rounded-full bg-[#2b5797] mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="font-heading text-lg font-bold mb-2 text-[#1C1D20]">Уникальность</h3>
                <p className="text-sm text-gray-700 leading-tight">
                  Каждый набор собран вручную
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg border-2 border-[#2b5797]/20">
                <div className="w-16 h-16 rounded-full bg-[#2b5797] mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="font-heading text-lg font-bold mb-2 text-[#1C1D20]">Качество</h3>
                <p className="text-sm text-gray-700 leading-tight">
                  Отборные ткани от производителя
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg border-2 border-[#2b5797]/20">
                <div className="w-16 h-16 rounded-full bg-[#2b5797] mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">💡</span>
                </div>
                <h3 className="font-heading text-lg font-bold mb-2 text-[#1C1D20]">Вдохновение</h3>
                <p className="text-sm text-gray-700 leading-tight">
                  Идеальный старт для проекта
                </p>
              </div>
            </div>

            <div className="bg-[#2b5797]/10 border-2 border-[#2b5797] p-8 rounded-lg mb-8 max-w-3xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-[#2b5797] flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">🎁</span>
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold mb-3 text-[#1C1D20]">
                    Идеальный подарок к праздникам
                  </h2>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    Ищете особенный подарок для творческого человека? Сумочка-сюрприз — это целый мир возможностей.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-white border-2 border-[#2b5797] rounded-md text-sm font-bold text-[#2b5797]">Новый год</span>
                    <span className="px-4 py-2 bg-white border-2 border-[#2b5797] rounded-md text-sm font-bold text-[#2b5797]">День рождения</span>
                    <span className="px-4 py-2 bg-white border-2 border-[#2b5797] rounded-md text-sm font-bold text-[#2b5797]">8 марта</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center bg-[#1C1D20] p-8 rounded-lg">
              <p className="text-xl text-gray-300 italic mb-4">
                Не вскрывать. Не трогать. Просто взять — и вдохновиться.
              </p>
              
              <h2 className="font-heading text-4xl font-bold text-white mb-4">
                Заберите свой — пока он есть
              </h2>
              
              <p className="text-[#2b5797] text-2xl font-bold">
                tkaniruna.ru
              </p>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t-2 border-[#2b5797] flex items-center justify-between">
            <div>
              <p className="font-heading text-2xl font-bold text-[#1C1D20]">RUNA TEX</p>
              <p className="text-gray-600">Продажа от производителя без посредников</p>
            </div>
            <div className="text-right">
              <p className="text-[#2b5797] font-bold text-xl">8-800-250-32-55</p>
              <p className="text-gray-600 text-sm">tkaniruna.ru</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-8 print:hidden">
        <div className="bg-[#1C1D20] p-6 rounded-lg border border-[#2b5797]">
          <h3 className="font-heading text-xl font-bold mb-4 text-white">📋 Инструкция для типографии</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• <strong className="text-white">Формат:</strong> A4 (210×297 мм) — одностраничный</li>
            <li>• <strong className="text-white">Стиль:</strong> Корпоративные цвета RUNA TEX (синий #2b5797, чёрный #1C1D20)</li>
            <li>• <strong className="text-white">Разрешение:</strong> Оптимизировано для печати</li>
            <li>• <strong className="text-white">Отступы:</strong> 10мм от края (безопасная зона)</li>
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
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }
        }
      `}</style>
    </div>
  );
};

export default PrintableFlyer;
