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
    <div className="min-h-screen bg-muted py-12 px-6">
      <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center print:hidden">
        <h1 className="font-heading text-3xl font-bold">Макет для печати</h1>
        <div className="flex gap-3">
          <Button onClick={handleDownloadPDF} size="lg" className="bg-gradient-to-r from-primary to-secondary">
            <Icon name="Download" className="mr-2" size={20} />
            Сохранить PDF
          </Button>
          <Button onClick={handlePrint} variant="outline" size="lg">
            <Icon name="Printer" className="mr-2" size={20} />
            Печать
          </Button>
        </div>
      </div>

      <div className="print-flyer bg-white mx-auto shadow-2xl" style={{ width: '210mm', minHeight: '297mm' }}>
        <div className="relative h-full flex flex-col" style={{ padding: '5mm' }}>
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(217, 70, 239, 0.3) 50%, rgba(249, 115, 22, 0.3) 100%)'
            }}
          />

          <div className="relative flex-1 flex flex-col">
            <div className="text-center mb-8 pt-8">
              <div className="inline-block px-6 py-3 bg-purple-100 rounded-full border-2 border-purple-300 mb-6">
                <span className="text-sm font-bold text-purple-700">✨ ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ</span>
              </div>
              
              <h1 className="font-heading text-6xl font-extrabold leading-tight mb-4">
                <span 
                  className="block mb-2"
                  style={{
                    background: 'linear-gradient(135deg, #8B5CF6 0%, #D946EF 50%, #F97316 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Сумочка-сюрприз
                </span>
                <span className="text-gray-900">от Runa Tex</span>
              </h1>
              
              <p className="text-2xl text-gray-600 max-w-2xl mx-auto font-semibold">
                1,5 кг тканевого волшебства — <br />
                и ни один набор не повторяется
              </p>
            </div>

            <div className="mb-8 flex justify-center">
              <img 
                src="https://cdn.poehali.dev/projects/4a755d57-1033-42e0-b30d-11cc19e4bed8/files/2a9468a2-2573-4ba6-bc29-e96d4004e5dc.jpg"
                alt="Runa Tex Logo"
                className="rounded-xl object-contain"
                style={{ maxHeight: '180px', maxWidth: '400px' }}
              />
            </div>

            <div className="mb-8">
              <p className="text-center text-xl text-gray-700 mb-6 leading-relaxed px-8">
                Тут и нежные однотонные отрезки, и принты-истории, и лоскуты разной длины — 
                всё, как в сундуке у феи творчества.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-8 px-4">
              <div className="text-center p-6 bg-purple-50 rounded-xl border-2 border-purple-200">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                     style={{ background: 'linear-gradient(135deg, #8B5CF6, #D946EF)' }}>
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="font-heading text-xl font-bold mb-2 text-gray-900">Уникальность</h3>
                <p className="text-sm text-gray-600 leading-tight">
                  Каждый набор не повторяется
                </p>
              </div>

              <div className="text-center p-6 bg-pink-50 rounded-xl border-2 border-pink-200">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                     style={{ background: 'linear-gradient(135deg, #D946EF, #F97316)' }}>
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="font-heading text-xl font-bold mb-2 text-gray-900">Качество</h3>
                <p className="text-sm text-gray-600 leading-tight">
                  Отборные ткани от Runa Tex
                </p>
              </div>

              <div className="text-center p-6 bg-orange-50 rounded-xl border-2 border-orange-200">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                     style={{ background: 'linear-gradient(135deg, #F97316, #8B5CF6)' }}>
                  <span className="text-3xl">💡</span>
                </div>
                <h3 className="font-heading text-xl font-bold mb-2 text-gray-900">Вдохновение</h3>
                <p className="text-sm text-gray-600 leading-tight">
                  Идеальный старт для проекта
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 p-8 rounded-2xl border-2 border-purple-300 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                     style={{ background: 'linear-gradient(135deg, #F97316, #D946EF)' }}>
                  <span className="text-2xl">🎁</span>
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold mb-3 text-gray-900">
                    Идеальный подарок к праздникам
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ищете особенный подарок для творческого человека? Сумочка-сюрприз — это целый мир возможностей.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-white rounded-full border border-purple-300 text-sm font-semibold text-gray-900">Новый год</span>
                    <span className="px-4 py-2 bg-white rounded-full border border-pink-300 text-sm font-semibold text-gray-900">День рождения</span>
                    <span className="px-4 py-2 bg-white rounded-full border border-orange-300 text-sm font-semibold text-gray-900">8 марта</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center py-8 bg-gray-900 rounded-2xl px-8">
              <p className="text-2xl font-semibold text-gray-300 italic mb-4">
                Не вскрывать. Не трогать. <br />
                Просто взять — и вдохновиться.
              </p>
              
              <h2 className="font-heading text-4xl font-bold mb-4">
                <span 
                  style={{
                    background: 'linear-gradient(135deg, #8B5CF6, #D946EF, #F97316)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Заберите свой — пока он есть
                </span>
              </h2>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="font-heading text-3xl font-bold text-white mb-2">
                  Runa Tex
                </p>
                <p className="text-lg text-gray-400">
                  где ткань становится историей
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-8 print:hidden">
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="font-heading text-xl font-bold mb-4">📋 Инструкция для типографии</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• <strong>Формат:</strong> A4 (210×297 мм)</li>
            <li>• <strong>Разрешение:</strong> Оптимизировано для печати</li>
            <li>• <strong>Цветовая модель:</strong> RGB (конвертируйте в CMYK при необходимости)</li>
            <li>• <strong>Отступы:</strong> 5мм от края (безопасная зона)</li>
            <li>• <strong>Формат файла:</strong> Сохраните как PDF через браузер (Ctrl+P → Сохранить как PDF)</li>
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