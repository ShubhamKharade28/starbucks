import Image from 'next/image';
import curationImg from '@/app/images/curation.svg';

const Curations = () => {
  const curations = ['Bestseller', 'Drinks', 'Foods', 'Merchandise', 'Coffe At Home', 'Ready to Eat'];
  return (
    <div className="flex flex-col gap-3 py-16 pt-6 px-32"
      style={{boxShadow: '0px 0px 7px rgba(50,50,50,0.5)'}}
    >
        <span className="text-2xl font-bold py-3" style={{color: '#1e3932'}}>Handcrafted Curations</span>
        <div className="flex w-full gap-3 justify-between">
        {
          curations.map((curation) => (
            <div className="flex flex-col items-center gap-2" key={curation}>
              <div className="h-24 w-24 curation-bg rounded-full overflow-hidden flex items-center justify-center">
                <Image src={curationImg} className="scale-150 w-40 h-40"/>
              </div>
              <span className="font-semibold" style={{color: '#1e3932'}}>{curation}</span>
            </div>
          ))
        }
        </div>
    </div>
  )
}

export default Curations;