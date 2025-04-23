#pragma once 

#include <iostream>
#include <string>

#define COUT std::cout 
#define STDSTR std::string

class ASpell;

class ATarget {

	protected:
		STDSTR	_type;

	public:
		ATarget();
		ATarget(STDSTR type);
		ATarget(const ATarget&);
		ATarget & operator = (const ATarget&);
		virtual ~ATarget();

		const STDSTR& getType() const;

		ATarget * clone() const = 0;

		void getHitBySpell(const ASpell& target) const;
		
};
