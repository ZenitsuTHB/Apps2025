#pragma once 

#include <iostream>
#include <string>

#define COUT std::cout 
#define STDSTR std::string

class Warlock {

	private:
		STDSTR	_name;
		STDSTR	_title;
		Warlock();
		Warlock(const Warlock&);
		Warlock & operator = (const Warlock&);
	public:
		~Warlock();
		Warlock(STDSTR name, STDSTR title);

		const STDSTR& getName() const;
		const STDSTR& getTitle() const;
		
		void introduce() const;
		void setTitle(const STDSTR& title);
};
