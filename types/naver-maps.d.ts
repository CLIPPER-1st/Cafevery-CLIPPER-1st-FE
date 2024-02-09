// naver-maps.d.ts
declare namespace naver {
    namespace maps {
        class Map {
            constructor(mapDiv: HTMLElement | string, mapOptions?: MapOptions);
            getCenter(): LatLng;
            // 기타 메서드 및 속성
        }
    
        class LatLng {
            constructor(lat: number, lng: number);
            lat(): number;
            lng(): number;
        }

        class Point {
            constructor(x: number, y: number);
            x: number;
            y: number;
        }
    
        const Event: {
            addListener(instance: any, eventName: string, handler: Function): any;
            removeListener(listener: any): void;
        };
    
        interface MapOptions {
            center?: LatLng;
            zoom?: number;
            // 기타 옵션
        }
    }
}
