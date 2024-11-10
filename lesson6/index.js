// cau1:

let length_: Number= 48
let width_: Number= 38

let chuvi: number = (length_ + width_ ) *2
let dientich: number = length_* width_

console.log(`chu vi cua hinh chu nhat co chieu dai la ${length_}=${width_}=${chuvi}m`)
console.log(`dien tich cua hinh chu nhat co chieu dai la ${length_}, chieu rong la ${width_}=${dientich}m`)

// cau2:
#include<stdio.h>#include<stdio.h>
int main(){
	int gio=0,giay=0,phut=0;
	printf("Nhap so giay :");
	scanf("%d",&giay);
	if(giay<60)
        printf("Thoi gian hoa dong la %d gio %d phut %d giay",gio,phut,giay);
    else if(giay>=60&&giay<3600){
        phut=(giay-giay%60)/60;
        giay%=60;
        printf("Thoi gian hoa dong la %d gio %d phut %d giay",gio,phut,giay);
    }
    else{
        gio=(giay-giay%3600)/3600;
        phut=((giay%3600)-(giay%3600)%60)/60;
        giay=giay-phut*60-gio*3600;
        printf("Thoi gian hoat dong la %d gio %d phut %d giay",gio,phut,giay);
    }
	return 0;

    //cau3:
    public class Power {
        public static void main(String[] args) {
            int base = 3, exponent = 4;
            long result = 1;
            while (exponent != 0)
            {
                result *= base;
                --exponent;
            }
            System.out.println("Answer = " + result);
        }
    }


//cau4:
public class TinhTrungBinhCong {
    public static void main(String[] args) {
        double[] arr = {19, 12.89, 16.5, 200, 13.7};
        double total = 0;
        for(int i=0; i<arr.length; i++){
            total = total + arr[i];
        }
        double average = total / arr.length;
        System.out.format("Kết quả là: %.3f", average);
    }
}


