import React from 'react'

const UiUx = () => {


    return (
        <section className='p-8 md:p-16'>
            <h2 className="text-4xl md:text-5xl mb-12 font-bold text-center" style={{ color: "var(--color-text-primary)" }} >UI/UX Project</h2>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8">

                <div className="relative flex items-center justify-center text-sm text-white/80 rounded-lg shadow-sm">
                    <div className="absolute bottom-2 flex items-center justify-around backdrop-blur-sm w-full max-w-80 rounded bg-white/10 border border-white/20 py-2">
                        <p className="text-center">Available soon.</p>
                        <button type="button" className="bg-black/50 rounded-full px-6 py-1.5">Notify me</button>
                    </div>
                    <img className="rounded-md" src="https://images.unsplash.com/photo-1599669454699-248893623440?q=80&w=600&auto=format&fit=crop" alt="" />
                </div>

            </div>
        </section>
    );
  
}

export default UiUx
