#pragma once

#include "ASpell.hpp"

class Fwoosh : public ASpell
{
	public:
		Fwoosh() : ASpell("Fwoosh","Fwooshed") {}
		virtual ~Fwoosh()  {}

		Fwoosh * clone() const {

			return new  Fwoosh;
		}
};
