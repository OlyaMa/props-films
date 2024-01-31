import { Star } from './Star.tsx';

interface StarsProps {
    count: number;
  }
  
  export const Stars = ({ count = 0 }: StarsProps) => {
    if (count < 0 || count > 5) {
      return null;
    }
    return (
      <ul className="card-body-stars u-clearfix">
        {[...Array(count)].map((_, index) => (
          <Star key={index} />
        ))}
      </ul>
    );
  };