import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface WelcomeProps {
  disabled: boolean;
  startButtonText: string;
  onStartCall: () => void;
}

export const Welcome = ({
  disabled,
  startButtonText,
  onStartCall,
  ref,
}: React.ComponentProps<'div'> & WelcomeProps) => {
  return (
    <section
      ref={ref}
      inert={disabled}
      className={cn(
        'bg-background fixed inset-0 mx-auto flex h-svh flex-col items-center justify-center text-center',
        disabled ? 'z-10' : 'z-20'
      )}
    >
      {/* Logo with background circle */}
      <div className="relative mb-8">
        {/* Transparent circle behind deer - doubled size */}
        <div className="absolute inset-0 w-48 h-48 mx-auto rounded-full bg-white/10 backdrop-blur-sm border border-white/20 -z-10"></div>
        
        {/* Deer logo centered - doubled size */}
        <div className="flex items-center justify-center w-48 h-48 mx-auto">
          <img 
            src="/lk-logo.svg" 
            alt="Logo" 
            className="w-32 h-32 filter brightness-0 invert opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-110"
          />
        </div>
      </div>

      {/* Text with proper z-index */}
      <div className="relative z-10">
        <p className="text-white max-w-prose pt-1 leading-6 font-medium text-shadow-lg mb-8">
          Feel free to chat with your assistant
        </p>
        
        <Button 
          variant="primary" 
          size="lg" 
          onClick={onStartCall} 
          className={cn(
            "w-72 font-mono font-semibold py-4 px-8 rounded-full",
            "bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600",
            "hover:from-purple-500 hover:via-violet-500 hover:to-fuchsia-500",
            "text-white border border-white/20 shadow-2xl hover:shadow-purple-500/25",
            "transform hover:scale-105 transition-all duration-300 ease-out",
            "backdrop-blur-sm",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          )}
        >
          {startButtonText}
        </Button>
      </div>
      <footer className="fixed bottom-5 left-0 z-20 flex w-full items-center justify-center">
        <p className="text-white/80 max-w-prose pt-1 text-xs leading-5 font-normal text-pretty md:text-sm text-shadow">
          All greetings from {' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/ziad.salem.147144"
            className="underline text-blue-300 hover:text-blue-200 transition-colors duration-200"
          >
            Ziad Emad
          </a>
          .
        </p>
      </footer>
    </section>
  );
};
