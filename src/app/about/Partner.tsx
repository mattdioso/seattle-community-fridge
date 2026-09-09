import Image from 'next/image';
import Link from 'next/link';

type PartnerProps = {
    name: string;
    image: string;
    url: string;
}

export default function Partner(props: PartnerProps) {
    return (
        <span className="flex-initial">
            <Link href={props.url}>
                <Image 
                    width={130} 
                    height={0} 
                    src={props.image} 
                    alt={props.name} 
                    title={props.name}
                    className="object-scale-down min-w-30 max-h-20 md:min-w-60 md:max-h-40" />
            </Link>
        </span>
    )
}